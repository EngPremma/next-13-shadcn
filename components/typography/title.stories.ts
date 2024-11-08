import type { Meta, StoryObj } from '@storybook/react';

import Title from './title';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Title> = {
  title: 'Typography/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    //👇 The args you need here will depend on your component
    label: 'Title',
  },
};
