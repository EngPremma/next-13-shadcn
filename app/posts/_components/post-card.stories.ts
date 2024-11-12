import type { Meta, StoryObj } from '@storybook/react';

import PostCard from './post-card';

const meta = {
  title: 'Post Page/Post Card',
  component: PostCard,
  tags: ['autodocs'],
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
};
