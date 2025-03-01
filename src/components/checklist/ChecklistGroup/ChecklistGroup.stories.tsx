import type { Meta, StoryObj } from '@storybook/react';
import { ChecklistGroup } from './ChecklistGroup';
import { v4 as uuidv4 } from 'uuid';

const meta: Meta<typeof ChecklistGroup> = {
  title: 'Checklist/ChecklistGroup',
  component: ChecklistGroup,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ChecklistGroup>;

const sampleItems = [
  {
    id: uuidv4(),
    text: 'Check item 1',
    status: 'not_started' as const,
  },
  {
    id: uuidv4(),
    text: 'Electrical connection, general, 3-pin',
    status: 'done' as const,
    statusText: 'Done: Part installation done',
  },
  {
    id: uuidv4(),
    text: 'Final installation',
    status: 'final_installation_done' as const,
  },
  {
    id: uuidv4(),
    text: 'LED installation',
    status: 'blocked' as const,
    statusText: 'Blocked: Missing parts',
  },
];

export const ReadOnly: Story = {
  args: {
    items: sampleItems,
    onItemChange: (id, status) => {
      console.log(`Item ${id} status changed to ${status}`);
    },
  },
};

export const Editable: Story = {
  args: {
    items: sampleItems,
    editable: true,
    onItemChange: (id, status) => {
      console.log(`Item ${id} status changed to ${status}`);
    },
    onItemAdd: text => {
      console.log(`New item added: ${text}`);
    },
    onItemRemove: id => {
      console.log(`Item removed: ${id}`);
    },
  },
};
