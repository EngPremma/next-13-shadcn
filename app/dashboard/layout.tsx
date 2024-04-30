import { ReactNode } from 'react';

const DashboardLayout = ({
  children,
  analytics,
  posts,
}: {
  children: ReactNode;
  analytics: ReactNode;
  posts: ReactNode;
}) => {
  return (
    <>
      <h1 className='text-4xl'>Dashboard Layout</h1>
      {children}
      <div className='grid grid-cols-2 gap-5'>
        {analytics}
        {posts}
      </div>
    </>
  );
};

export default DashboardLayout;
