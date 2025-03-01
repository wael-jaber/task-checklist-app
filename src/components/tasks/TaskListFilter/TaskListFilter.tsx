import React, { useState } from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export type TaskFilterStatus = 'all' | 'active' | 'completed' | 'blocked';

export interface TaskListFilterProps {
  onSearchChange: (searchText: string) => void;
  onStatusChange: (status: TaskFilterStatus) => void;
  searchValue?: string;
  statusValue?: TaskFilterStatus;
}

export const TaskListFilter: React.FC<TaskListFilterProps> = ({
  onSearchChange,
  onStatusChange,
  searchValue = '',
  statusValue = 'all',
}) => {
  const [search, setSearch] = useState(searchValue);
  const [status, setStatus] = useState(statusValue);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);
    onSearchChange(newValue);
  };

  const handleStatusChange = (event: SelectChangeEvent<TaskFilterStatus>) => {
    const newValue = event.target.value as TaskFilterStatus;
    setStatus(newValue);
    onStatusChange(newValue);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
        <TextField
          fullWidth
          placeholder="Search tasks..."
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        <FormControl variant="outlined" size="small" sx={{ minWidth: { xs: '100%', sm: 200 } }}>
          <InputLabel id="task-status-filter-label" htmlFor="task-status-filter">
            Status
          </InputLabel>
          <Select
            labelId="task-status-filter-label"
            id="task-status-filter"
            value={status}
            onChange={handleStatusChange}
            label="Status"
            startAdornment={
              <InputAdornment position="start">
                <FilterListIcon color="action" />
              </InputAdornment>
            }
          >
            <MenuItem value="all">All Tasks</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="blocked">Blocked</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>
  );
};
