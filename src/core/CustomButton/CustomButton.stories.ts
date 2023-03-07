import type { Meta, StoryObj } from '@storybook/react';

import { CustomButton } from './CustomButton';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CustomButton> = {
  title: 'Example/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'CustomButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'CustomButton',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'CustomButton',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'CustomButton',
  },
};
