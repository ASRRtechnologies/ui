import type { Meta, StoryObj } from '@storybook/react';

import { CoreButton } from './CoreButton';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof CoreButton> = {
  title: 'Example/CoreButton',
  component: CoreButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CoreButton>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'CustomButton',
  },
};

export const Secondary: Story = {
  args: {
    label: 'SecondaryButton',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'LargeButton'
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'SmallButton',
  },
};
