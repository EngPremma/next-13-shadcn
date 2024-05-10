import { ReactNode } from 'react';

import AlertButton from './_components/button';

const PostsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-4'>Posts</h1>
      <AlertButton />
      {children}
    </>
  );
};

export default PostsLayout;
