'use client';

import { ReactNode, useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
};

const PostDetailModal = ({ children }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      open={open}
      onOpenChange={open => {
        setOpen(open);
        router.back();
      }}
    >
      <DialogContent>
        <DialogHeader hidden>
          <DialogTitle hidden />
          <DialogDescription hidden />
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};

export default PostDetailModal;
