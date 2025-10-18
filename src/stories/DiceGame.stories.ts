import type { Meta, StoryObj } from '@storybook/react';
import { DiceGame } from '../features/dice-game/DiceGame';

const meta: Meta<typeof DiceGame> = {
  title: 'Organisms/DiceGame',
  component: DiceGame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};