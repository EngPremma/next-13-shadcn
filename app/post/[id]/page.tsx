import { type Post } from '@/app/posts/page';
type Props = {
  params: { id: string };
};

const PostDetailPage = async ({ params }: Props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post: Post = await res.json();

  return (
    <>
      <p className='text-xl text-muted-foreground'>{post.title}</p>
    </>
  );
};

export default PostDetailPage;
