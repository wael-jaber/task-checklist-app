import React, { useState } from 'react';
import { Box, TextField, Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskInput, ChecklistItem, Task } from '@types';
import { Button } from '@components/common/Button';
import { ChecklistGroup } from '@components/checklist/ChecklistGroup';

export interface TaskFormProps {
  initialValues?: Partial<Task>;
  onSubmit: (values: CreateTaskInput) => void;
  onCancel?: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialValues?.title || '');
  const [description, setDescription] = useState(initialValues?.description || '');
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialValues?.checklist || []);
  const [titleError, setTitleError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    }

    const taskData: CreateTaskInput = {
      title: title.trim(),
      description: description.trim() || undefined,
      checklist: checklist.map(({ text, status, statusText }) => ({
        text,
        status,
        statusText,
      })),
    };

    onSubmit(taskData);
  };

  const handleAddChecklistItem = (text: string) => {
    const newItem: ChecklistItem = {
      id: uuidv4(),
      text,
      status: 'not_started',
    };

    setChecklist([...checklist, newItem]);
  };

  const handleRemoveChecklistItem = (id: string) => {
    setChecklist(checklist.filter(item => item.id !== id));
  };

  const handleChecklistItemStatusChange = (id: string, status: ChecklistItem['status']) => {
    setChecklist(checklist.map(item => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <Card>
      <CardHeader title={initialValues ? 'Edit Task' : 'Create New Task'} />
      <Divider />
      <CardContent>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Task Title"
                value={title}
                onChange={e => {
                  setTitle(e.target.value);
                  if (e.target.value.trim()) setTitleError('');
                }}
                error={!!titleError}
                helperText={titleError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                label="Description (Optional)"
                multiline
                rows={3}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <ChecklistGroup
                title="Checklist Items"
                items={checklist}
                onItemChange={handleChecklistItemStatusChange}
                onItemAdd={handleAddChecklistItem}
                onItemRemove={handleRemoveChecklistItem}
                editable={true}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
                {onCancel && (
                  <Button label="Cancel" variant="outlined" color="secondary" onClick={onCancel} />
                )}
                <Button
                  label={initialValues ? 'Update Task' : 'Create Task'}
                  type="submit"
                  color="primary"
                  disabled={!title.trim() || checklist.length === 0}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
