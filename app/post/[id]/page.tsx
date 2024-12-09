import { type Post } from '@/app/posts/page';
type Props = {
  params: Promise<{ id: string }>;
};

const PostDetailPage = async (props: Props) => {
  const params = await props.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post: Post = await res.json();

  return (
    <>
      <p className='text-xl text-muted-foreground'>{post.title}</p>
    </>
  );
};

export default PostDetailPage;
