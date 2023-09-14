'use client';

import { useTransition } from 'react';

import { updateTodoAction } from '@/app/todos/_action';
import { TodoClass } from '@/models/Todo';

type CheckBoxProps = {
  todo: TodoClass;
};

const CheckBox = ({ todo }: CheckBoxProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <input
      type='checkbox'
      checked={todo.completed}
      name='completed'
      onChange={() =>
        startTransition(() =>
          updateTodoAction(todo.id, { completed: !todo.completed }, '/with-server-actions'),
        )
      }
      disabled={isPending}
      className='h-6 w-6 border-gray-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed'
    />
  );
};

export default CheckBox;
