import type { Meta, StoryObj } from '@storybook/react';
import { DiceControls } from '../features/dice-game/components/DiceControls';

const meta: Meta<typeof DiceControls> = {
  title: 'Molecules/DiceControls',
  component: DiceControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onRoll: { action: 'rolled' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentValue: 3,
    isRolling: false,
    onRoll: () => {},
  },
};

export const Rolling: Story = {
  args: {
    currentValue: 5,
    isRolling: true,
    onRoll: () => {},
  },
};