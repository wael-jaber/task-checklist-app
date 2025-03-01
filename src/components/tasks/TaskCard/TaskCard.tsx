import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  IconButton,
  Collapse,
  CardHeader,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ErrorIcon from '@mui/icons-material/Error';
import { Task } from '@types';
import { ChecklistItem } from '@components/checklist/ChecklistItem';
import { TaskActionMenu } from '../TaskActionMenu';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TaskCardProps {
  task: Task;
  onChecklistItemStatusChange: (taskId: string, itemId: string, status: string) => void;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onToggleBlocked?: (blocked: boolean) => void;
}

const ExpandMore = styled(IconButton)<{ expanded: boolean }>(({ theme, expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TaskBlockedIndicator = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.error.main,
  marginLeft: theme.spacing(1),
}));

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onChecklistItemStatusChange,
  onClick,
  onEdit,
  onDelete,
  onDuplicate,
  onToggleBlocked,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const handleMenuAction = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleChecklistItemChange = (itemId: string, status: string) => {
    onChecklistItemStatusChange(task.id, itemId, status);
  };

  const completedItems = task.checklist.filter(
    item => item.status === 'done' || item.status === 'final_installation_done'
  ).length;

  return (
    <Card
      sx={{
        mb: 2,
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': {
          boxShadow: onClick ? 3 : 1,
        },
      }}
      onClick={onClick}
    >
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div">
              {task.title}
            </Typography>
            {task.isBlocked && (
              <TaskBlockedIndicator>
                <ErrorIcon fontSize="small" />
                <Typography variant="caption" ml={0.5}>
                  Blocked
                </Typography>
              </TaskBlockedIndicator>
            )}
            {!task.isBlocked && task.isCompleted && (
              <Chip
                icon={<CheckCircleIcon />}
                label="Completed"
                color="success"
                size="small"
                sx={{ ml: 1 }}
              />
            )}
          </Box>
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={handleMenuAction}>
            <TaskActionMenu
              onEdit={onEdit}
              onDelete={onDelete}
              onDuplicate={onDuplicate}
              onToggleBlocked={onToggleBlocked}
              isBlocked={task.isBlocked}
            />
            <ExpandMore
              expanded={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        }
      />
      <Divider />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="subtitle1" fontWeight="medium">
            Checklist
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {completedItems} / {task.checklist.length} completed
          </Typography>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 2 }}>
            {task.checklist.map(item => (
              <ChecklistItem key={item.id} item={item} onStatusChange={handleChecklistItemChange} />
            ))}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};
