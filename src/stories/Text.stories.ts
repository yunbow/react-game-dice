import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'サイコロゲーム',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'サブタイトル',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: '履歴',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: '結果: 3',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: '1回目: 5 (12:34:56)',
  },
};