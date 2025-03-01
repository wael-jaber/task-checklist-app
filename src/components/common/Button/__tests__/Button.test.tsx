import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Button } from '../Button';
import AddIcon from '@mui/icons-material/Add';

describe('Button Component', () => {
  test('renders button with label', () => {
    render(<Button label="Test Button" />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with icon when provided', () => {
    render(<Button label="Add Item" icon={<AddIcon data-testid="add-icon" />} />);

    expect(screen.getByText('Add Item')).toBeInTheDocument();
    expect(screen.getByTestId('add-icon')).toBeInTheDocument();
  });

  test('has disabled attribute when disabled prop is true', () => {
    render(<Button label="Disabled Button" disabled />);

    const button = screen.getByText('Disabled Button').closest('button');
    expect(button).toBeDisabled();
  });

  test('applies fullWidth style when fullWidth prop is true', () => {
    render(<Button label="Full Width Button" fullWidth />);

    const button = screen.getByText('Full Width Button').closest('button');
    expect(button).toHaveClass('MuiButton-fullWidth');
  });
});
