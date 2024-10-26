'use client';

import { Button } from '@/components/ui/button';
import { createPost } from '../_actions/create-post';

const CreatePostButton = () => {
  return <Button onClick={() => createPost()}>create post</Button>;
};

export default CreatePostButton;
