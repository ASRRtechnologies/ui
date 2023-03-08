import type { Meta, StoryObj } from '@storybook/react';

import { CoreButton } from './CoreButton';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CoreButton> = {
  title: 'Example/CoreButton',
  component: CoreButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CoreButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'filled',
    children: 'CustomButton1',
  },
};

export const Secondary: Story = {
  args: {
    children: 'SecondaryButton',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'LargeButton'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'SmallButton',
  },
};
