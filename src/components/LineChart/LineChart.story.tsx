
import type { Meta, StoryObj } from '@storybook/react';

import {LineChart} from './LineChart';

const meta: Meta<typeof LineChart> = {
  title: 'LineChart',
  component: LineChart,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof LineChart>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
  }
};
