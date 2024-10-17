'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { createPost } from './_actions/create-post';
import UserList from './_components/user-list';

const Users = () => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <h1>Users page</h1>
      <Button onClick={() => createPost()}>create post</Button>

      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default Users;
