'use client';

import { Button } from '@/components/ui/button';

const AlertButton = () => {
  return (
    <Button
      variant='secondary'
      onClick={() => {
        alert('hello world');
      }}
    >
      Alert me
    </Button>
  );
};

export default AlertButton;
