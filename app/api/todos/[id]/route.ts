import connectDB from '@/lib/db/connect-db';
import { deleteTodo, getTodo, updateTodo } from '@/lib/db/todo-db';
import { createErrorResponse } from '@/lib/utils';
import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const id = params.id;
    const { todo, error } = await getTodo(id);

    if (error) {
      throw error;
    }

    const json_response = {
      status: 'success',
      data: {
        todo,
      },
    };
    return NextResponse.json(json_response);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (typeof error === 'string' && error.includes('Todo not found')) {
      return createErrorResponse('Todo not found', 404);
    }

    return createErrorResponse(error.message, 500);
  }
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const id = params.id;
    const body = await request.json();

    const { todo, error } = await updateTodo(id, body);

    if (error) {
      throw error;
    }

    const json_response = {
      status: 'success',
      data: {
        todo,
      },
    };
    return NextResponse.json(json_response);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (typeof error === 'string' && error.includes('Todo not found')) {
      return createErrorResponse('Todo not found', 404);
    }

    return createErrorResponse(error.message, 500);
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const id = params.id;
    const { error } = await deleteTodo(id);

    if (error) {
      throw error;
    }

    return new NextResponse(null, { status: 204 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (typeof error === 'string' && error.includes('Todo not found')) {
      return createErrorResponse('Todo not found', 404);
    }

    return createErrorResponse(error.message, 500);
  }
}
