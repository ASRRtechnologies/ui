import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { argv } from 'yargs';

const name = (argv as any)._[0];

const componentPath = path.join(__dirname, '../src/components', name);

if (!name) {
    process.stdout.write(chalk.red`Component name is required\n`);
    process.exit(1);
}

if (fs.existsSync(componentPath)) {
    process.stdout.write(chalk.red`Component already exists\n`);
    process.exit(1);
}

const component = `
import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({}));
export function ${name}() {
  const { classes } = useStyles();
  return <div>${name}</div>;
}
`;

const attributes = `export {${name}} from './${name}';`;

const story = `
import type { Meta, StoryObj } from '@storybook/react';

import {${name}} from './${name}';

const meta: Meta<typeof ${name}> = {
  title: '${name}',
  component: ${name},
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof ${name}>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
  }
};
`

fs.mkdirSync(componentPath);
fs.writeFileSync(path.join(componentPath, `${name}.tsx`), component);
fs.writeFileSync(path.join(componentPath, `${name}.story.tsx`), story);
fs.writeFileSync(path.join(componentPath, 'index.ts'), attributes);

process.stdout.write(chalk.cyan`Component ${name} created\n`);
process.exit(0);