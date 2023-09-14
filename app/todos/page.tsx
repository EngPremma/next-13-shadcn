import TodoForm from '@/app/todos/_components/todo-form';
import TodoItem from './_components/todo-item';

import { getTodos } from '@/lib/db/todo-db';

const Todo = async () => {
  const { results, todos } = await getTodos();

  return (
    <>
      <TodoForm />
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      {results === 0 ? (
        <p className='text-center'>No Todos Found</p>
      ) : (
        todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)
      )}
    </>
  );
};

export default Todo;
