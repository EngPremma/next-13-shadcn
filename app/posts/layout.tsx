import { ReactNode } from 'react';

const PostsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <h1 className='text-3xl font-bold'>Posts</h1>
      {children}
    </>
  );
};

export default PostsLayout;
