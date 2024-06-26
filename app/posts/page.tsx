type Post = {
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
      {posts.map(post => (
        <div key={post.id} className='rounded bg-blue-500 p-3 text-white'>
          <article className='text-wrap'>
            <h3 className='text-xl font-bold mb-2'>{post.title}</h3>
            <p className='font-normal text-slate-100 text-sm'>{post.body}</p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Posts;
