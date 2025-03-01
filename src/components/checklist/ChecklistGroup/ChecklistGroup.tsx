import React, { useState } from 'react';
import { Box, Typography, Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ChecklistItem as ChecklistItemType } from '@types';
import { ChecklistItem } from '../ChecklistItem';
import { Button } from '@components/common/Button';
import TextField from '@mui/material/TextField';

export interface ChecklistGroupProps {
  title?: string;
  items: ChecklistItemType[];
  onItemChange: (id: string, status: ChecklistItemType['status'], statusText?: string) => void;
  onItemAdd?: (text: string) => void;
  onItemRemove?: (id: string) => void;
  editable?: boolean;
}

export const ChecklistGroup: React.FC<ChecklistGroupProps> = ({
  title = 'Checklist',
  items,
  onItemChange,
  onItemAdd,
  onItemRemove,
  editable = false,
}) => {
  const [newItemText, setNewItemText] = useState('');

  const handleAddItem = () => {
    if (newItemText.trim() && onItemAdd) {
      onItemAdd(newItemText.trim());
      setNewItemText('');
    }
  };

  const completedItems = items.filter(
    item => item.status === 'done' || item.status === 'final_installation_done'
  ).length;

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {completedItems} / {items.length} completed
        </Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {items.map(item => (
        <Box key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ flexGrow: 1 }}>
            <ChecklistItem item={item} onStatusChange={onItemChange} />
          </Box>
          {editable && onItemRemove && (
            <IconButton color="error" onClick={() => onItemRemove(item.id)} size="small">
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      ))}

      {editable && onItemAdd && (
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <TextField
            fullWidth
            label="New checklist item"
            variant="outlined"
            size="small"
            value={newItemText}
            onChange={e => setNewItemText(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                handleAddItem();
              }
            }}
          />
          <Button
            label="Add"
            icon={<AddIcon />}
            onClick={handleAddItem}
            disabled={!newItemText.trim()}
          />
        </Box>
      )}
    </Box>
  );
};
