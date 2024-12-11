'use client'; // Error components must be Client Components

import { useEffect } from 'react';

const ErrorPostsPage = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p className='text-lg font-bold text-center'>{error.message}</p>
    </div>
  );
};

export default ErrorPostsPage;
