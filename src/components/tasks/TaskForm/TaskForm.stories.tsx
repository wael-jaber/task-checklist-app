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

// New story for form with image marker
export const WithImageMarker: Story = {
  args: {
    floorPlanImage: 'https://placehold.co/600x400/png',
    initialValues: {
      id: uuidv4(),
      userId: 'user123',
      title: 'Install Wall Light',
      description: 'Install L3.1 LED surface-mounted wall light',
      checklist: [
        {
          id: uuidv4(),
          text: 'Electrical connection, general, 3-pin',
          status: 'not_started' as const,
        },
        {
          id: uuidv4(),
          text: 'Wall mount installation',
          status: 'not_started' as const,
        },
      ],
      imageMarker: {
        src: 'https://placehold.co/600x400/png',
        x: 35,
        y: 65,
      },
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
