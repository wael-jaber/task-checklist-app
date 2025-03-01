import type { Meta, StoryObj } from '@storybook/react';
import { v4 as uuidv4 } from 'uuid';
import { TaskForm } from '@components/tasks/TaskForm';

const meta: Meta<typeof TaskForm> = {
  title: 'Tasks/TaskForm',
  component: TaskForm,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TaskForm>;

export const CreateNew: Story = {
  args: {
    onSubmit: values => {
      console.log('Form submitted with values:', values);
    },
    onCancel: () => {
      console.log('Form cancelled');
    },
  },
};

export const EditExisting: Story = {
  args: {
    initialValues: {
      id: uuidv4(),
      userId: 'user123',
      title: 'Light Bulb 150S',
      description: 'Replace existing light bulb with energy efficient LED',
      checklist: [
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
          text: 'Check item 3',
          status: 'final_installation_done' as const,
        },
      ],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    onSubmit: values => {
      console.log('Form submitted with values:', values);
    },
    onCancel: () => {
      console.log('Form cancelled');
    },
  },
};
