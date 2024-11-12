import PostCard from './_components/post-card';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
    headers: {
      API_KEY: 'john',
    },
  });

  if (!response.ok) throw Error('No Post!');

  const posts: Post[] = await response.json();

  return (
    <div className='my-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {posts.map(({ id, body, title }) => (
        <PostCard key={id} id={id} title={title} body={body} />
      ))}
    </div>
  );
};

export default Posts;
