import React from 'react';
import { Box, Typography, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChecklistItem as ChecklistItemType } from '@types';
import { ChecklistItemStatusSelector } from '../ChecklistItemStatusSelector';

export interface ChecklistItemProps {
  item: ChecklistItemType;
  onStatusChange: (id: string, status: ChecklistItemType['status'], statusText?: string) => void;
}

const ItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1, 0),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onStatusChange }) => {
  const handleCheckboxChange = () => {
    // Simple toggle between not started and done
    const newStatus = item.status === 'done' ? 'not_started' : 'done';
    onStatusChange(item.id, newStatus);
  };

  const handleStatusChange = (status: ChecklistItemType['status'], statusText?: string) => {
    onStatusChange(item.id, status, statusText);
  };

  const isChecked = item.status === 'done' || item.status === 'final_installation_done';
  const isDisabled = item.status === 'blocked';

  return (
    <ItemContainer>
      <Checkbox checked={isChecked} onChange={handleCheckboxChange} disabled={isDisabled} />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body1">{item.text}</Typography>
        {item.statusText && (
          <Typography variant="body2" color="text.secondary">
            {item.statusText}
          </Typography>
        )}
      </Box>
      <ChecklistItemStatusSelector
        status={item.status}
        statusText={item.statusText}
        onStatusChange={handleStatusChange}
      />
    </ItemContainer>
  );
};
