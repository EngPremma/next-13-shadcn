import { createTodoAction } from '@/app/todos/_action';

const TodoForm = () => {
  const action = async (data: FormData) => {
    'use server';

    const title = data.get('title');
    if (!title || typeof title !== 'string') {
      return;
    }

    // Invoke server action to add new todo
    await createTodoAction({ title, path: '/todos' });
  };

  return (
    <form action={action} key={Math.random()} className='flex items-center space-x-2 mb-4'>
      <input type='text' name='title' className='border rounded px-2 py-01 flex-1' />
      <button className='px-4 py-1 text-white rounded bg-green-500'>Add</button>
    </form>
  );
};

export default TodoForm;
