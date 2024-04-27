'use client';

import { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        //   cache: 'force-cache',
        //   headers: {
        //     API_KEY: 'john',
        //   },
        // });
        const response = await fetch('/posts/api', { cache: 'force-cache' });
        const data: Post[] = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.log('error :>> ', error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (!posts.length) {
      return <p>No Post!</p>;
    }

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

  return (
    <>
      <h1 className='text-3xl font-bold'>Posts</h1>
      {renderPosts()}
    </>
  );
};

export default Posts;
