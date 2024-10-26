import { ReactNode } from 'react';

const PostsLayout = ({ children, modal }: { children: ReactNode; modal: ReactNode }) => {
  return (
    <>
      <h1 className='text-3xl font-bold'>Posts</h1>
      {children}
      {modal}
    </>
  );
};

export default PostsLayout;
