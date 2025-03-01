import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'startIcon'> {
  label: string;
  icon?: React.ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  ...props
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      startIcon={icon}
      sx={{
        borderRadius: '8px',
        textTransform: 'none',
        fontWeight: 500,
        boxShadow: variant === 'contained' ? 2 : 'none',
      }}
      {...props}
    >
      {label}
    </MuiButton>
  );
};
