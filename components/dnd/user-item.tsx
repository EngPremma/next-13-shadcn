'use client';

import { DragHandleDots2Icon } from '@radix-ui/react-icons';
import { Draggable, DraggableProps } from 'react-beautiful-dnd';

interface UserItemProps extends Omit<DraggableProps, 'children'> {
  name: string;
}

const UserItem = ({ name, ...props }: UserItemProps) => {
  const itemDraggingOverStyle = (isDragging: boolean) => isDragging && 'bg-lime-700';

  return (
    <Draggable {...props}>
      {({ dragHandleProps, draggableProps, innerRef }, { isDragging }) => {
        return (
          <div
            ref={innerRef}
            {...draggableProps}
            className={`flex space-x-2 bg-lime-600 text-white px-2 py-4 rounded-md ${itemDraggingOverStyle(
              isDragging,
            )}`}
          >
            <div {...dragHandleProps}>
              <DragHandleDots2Icon className='h-6 w-6' />
            </div>
            <p className='font-medium'>{name}</p>
          </div>
        );
      }}
    </Draggable>
  );
};

export default UserItem;
