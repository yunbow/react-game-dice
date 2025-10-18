import type { Meta, StoryObj } from '@storybook/react';
import { DiceFace } from '../features/dice-game/components/DiceFace';

const meta: Meta<typeof DiceFace> = {
  title: 'Atoms/DiceFace',
  component: DiceFace,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const One: Story = {
  args: {
    value: 1,
    position: 'front',
  },
};

export const Two: Story = {
  args: {
    value: 2,
    position: 'front',
  },
};

export const Three: Story = {
  args: {
    value: 3,
    position: 'front',
  },
};

export const Four: Story = {
  args: {
    value: 4,
    position: 'front',
  },
};

export const Five: Story = {
  args: {
    value: 5,
    position: 'front',
  },
};

export const Six: Story = {
  args: {
    value: 6,
    position: 'front',
  },
};