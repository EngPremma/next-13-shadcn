'use client';

import { useActionState } from 'react';

import CreatePostButton from './create-post-button';
import { createPost } from '../_actions/create-post';

const initialState = {
  message: '',
};

const CreateUserForm = () => {
  const [state, formAction] = useActionState(createPost, initialState);

  return (
    <form action={formAction}>
      <input name='username' type='text' placeholder='username' />
      <input name='password' type='text' placeholder='password' />
      {state?.message && <p>{state.message}</p>}
      <CreatePostButton />
    </form>
  );
};

export default CreateUserForm;
