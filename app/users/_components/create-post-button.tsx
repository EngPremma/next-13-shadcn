'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';

const CreatePostButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending}>
      create post
    </Button>
  );
};

export default CreatePostButton;
