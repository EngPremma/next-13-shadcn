'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import UserItem from '@/components/dnd/user-item';

type User = { id: number; name: string };

const data: User[] = [
  { id: 1, name: 'Premma' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Doe' },
];

const grouped = [
  {
    id: 1,
    name: 'Students',
    children: [
      { id: 1, name: 'Premma' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Doe' },
    ],
  },
  {
    id: 2,
    name: 'Teachers',
    children: [
      { id: 1, name: 'Premma' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Doe' },
    ],
  },
];

const UserList = () => {
  const [users, setUsers] = useState<User[]>(data);

  const reOrder = (users: User[], startIndex: number, endIndex: number) => {
    const result = Array.from(users);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleDrag = (result: DropResult) => {
    if (!result.destination) return;
    console.log('result :>> ', result);
    const items = reOrder(users, result.source.index, result.destination.index);

    setUsers(items);
  };

  const listDraggingOverStyle = (isDraggingOver: boolean) => isDraggingOver && 'bg-blue-200';

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <Droppable droppableId='23133'>
        {({ innerRef, placeholder, droppableProps }, { isDraggingOver }) => {
          return (
            <div
              ref={innerRef}
              {...droppableProps}
              className={`bg-gray-300 p-2 rounded-md flex flex-col space-y-2 ${listDraggingOverStyle(
                isDraggingOver,
              )}`}
            >
              {users.map((user, index) => (
                <UserItem key={user.id} draggableId={`${user.id}`} index={index} name={user.name} />
              ))}
              {placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default UserList;
