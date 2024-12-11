import { Suspense } from 'react';

import UserList from './_components/user-list';
import CreateUserForm from './_components/create-user-form';

const Users = () => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <h1>Users page</h1>
      <CreateUserForm />
      <Suspense fallback={<p>Loading...</p>}>
        <UserList />
      </Suspense>
    </div>
  );
};

export default Users;
