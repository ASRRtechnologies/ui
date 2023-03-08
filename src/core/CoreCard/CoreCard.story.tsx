import type { Meta, StoryObj } from '@storybook/react';

import {CoreCard} from './CoreCard';

const meta: Meta<typeof CoreCard> = {
  title: 'CoreCard',
  component: CoreCard,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof CoreCard>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
  }
};
