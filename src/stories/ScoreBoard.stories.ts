import type { Meta, StoryObj } from '@storybook/react';
import { ScoreBoard } from '../features/dice-game/components/ScoreBoard';

const meta: Meta<typeof ScoreBoard> = {
  title: 'Molecules/ScoreBoard',
  component: ScoreBoard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockHistory = [
  {
    id: '1',
    value: 6,
    timestamp: new Date('2023-01-01T12:00:00'),
    rollNumber: 3,
  },
  {
    id: '2',
    value: 2,
    timestamp: new Date('2023-01-01T11:59:00'),
    rollNumber: 2,
  },
  {
    id: '3',
    value: 4,
    timestamp: new Date('2023-01-01T11:58:00'),
    rollNumber: 1,
  },
];

export const WithHistory: Story = {
  args: {
    rollCount: 3,
    history: mockHistory,
  },
};

export const Empty: Story = {
  args: {
    rollCount: 0,
    history: [],
  },
};