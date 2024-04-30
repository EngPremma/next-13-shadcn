import { ReactNode } from 'react';
import Link from 'next/link';

const AnalyticsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h5 className='text-xl'>AnalyticsLayout</h5>
      <br />
      <Link href='/dashboard/page-views'>Page Views</Link>
      <Link href='/dashboard/visitors'>Visitors</Link>
      {children}
    </div>
  );
};

export default AnalyticsLayout;
