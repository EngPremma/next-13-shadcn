import { deleteTodoAction, updateTodoAction } from '@/app/todos/_action';
import CheckBox from './checkbox';
import { TodoClass } from '@/models/Todo';

type TodoItemProps = {
  todo: TodoClass;
};

const revalidatePath = '/todos';

const TodoItem = ({ todo }: TodoItemProps) => {
  const handleUpdateTodo = async () => {
    'use server';

    await updateTodoAction(todo.id, { completed: !todo.completed }, revalidatePath);
  };

  const handleDeleteTodo = async () => {
    'use server';

    await deleteTodoAction({
      id: todo.id,
      path: revalidatePath,
    });
  };

  return (
    <form className='flex items-center space-x-2 mb-2'>
      <button
        className={`px-2 py-1 flex-1 text-left ${todo.completed ? 'line-through' : ''}`}
        formAction={handleUpdateTodo}
      >
        {todo.title}
      </button>
      <div className='flex items-center'>
        <CheckBox todo={todo} />
        <button className='px-2 py-1 ml-2 text-white rounded bg-red-500' formAction={handleDeleteTodo}>
          Delete
        </button>
      </div>
    </form>
  );
};

export default TodoItem;
