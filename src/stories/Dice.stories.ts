import type { Meta, StoryObj } from '@storybook/react';
import { Dice } from '../features/dice-game/components/Dice';

const meta: Meta<typeof Dice> = {
  title: 'Molecules/Dice',
  component: Dice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ShowingOne: Story = {
  args: {
    value: 1,
    isRolling: false,
  },
};

export const ShowingThree: Story = {
  args: {
    value: 3,
    isRolling: false,
  },
};

export const ShowingSix: Story = {
  args: {
    value: 6,
    isRolling: false,
  },
};

export const Rolling: Story = {
  args: {
    value: 4,
    isRolling: true,
  },
};