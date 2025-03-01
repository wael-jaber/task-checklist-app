import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface TaskActionMenuProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onToggleBlocked?: (blocked: boolean) => void;
  isBlocked?: boolean;
  disabled?: boolean;
}

export const TaskActionMenu: React.FC<TaskActionMenuProps> = ({
  onEdit,
  onDelete,
  onDuplicate,
  onToggleBlocked,
  isBlocked = false,
  disabled = false,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (callback?: () => void) => {
    if (callback) {
      callback();
    }
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label="task actions"
        aria-controls="task-action-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        disabled={disabled}
        size="small"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="task-action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {onEdit && (
          <MenuItem onClick={() => handleAction(onEdit)}>
            <ListItemIcon>
              <EditIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Edit Task</ListItemText>
          </MenuItem>
        )}

        {onDuplicate && (
          <MenuItem onClick={() => handleAction(onDuplicate)}>
            <ListItemIcon>
              <ContentCopyIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Duplicate Task</ListItemText>
          </MenuItem>
        )}

        {onToggleBlocked && (
          <MenuItem onClick={() => handleAction(() => onToggleBlocked(!isBlocked))}>
            <ListItemIcon>
              {isBlocked ? (
                <CheckCircleIcon fontSize="small" color="success" />
              ) : (
                <BlockIcon fontSize="small" color="error" />
              )}
            </ListItemIcon>
            <ListItemText>{isBlocked ? 'Mark as Unblocked' : 'Mark as Blocked'}</ListItemText>
          </MenuItem>
        )}

        {onDelete && (
          <>
            <Divider />
            <MenuItem onClick={() => handleAction(onDelete)}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" color="error" />
              </ListItemIcon>
              <ListItemText>Delete Task</ListItemText>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};
