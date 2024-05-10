'use server';

type Post = {
  title: string;
};

export const getPosts = async ({
  page = 1,
  limit = 10,
}: {
  page: number;
  limit: number;
}): Promise<Post[]> => {
  console.log('page :>> ', page);
  console.log('limit :>> ', limit);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  return await response.json();
};
