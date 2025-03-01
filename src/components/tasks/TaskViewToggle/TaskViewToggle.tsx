import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ListIcon from '@mui/icons-material/List';

export type ViewMode = 'list' | 'map';

export interface TaskViewToggleProps {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export const TaskViewToggle: React.FC<TaskViewToggleProps> = ({ viewMode, onChange }) => {
  const handleChange = (event: React.MouseEvent<HTMLElement>, newMode: ViewMode | null) => {
    // Don't allow deselecting both options
    if (newMode !== null) {
      onChange(newMode);
    }
  };

  return (
    <ToggleButtonGroup
      value={viewMode}
      exclusive
      onChange={handleChange}
      aria-label="view mode"
      size="small"
    >
      <ToggleButton value="list" aria-label="list view">
        <ListIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton value="map" aria-label="map view">
        <MapIcon fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
