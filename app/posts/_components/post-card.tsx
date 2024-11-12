import Link from 'next/link';

export interface PostCardProps {
  /** Title contents */
  id: number;
  title: string;
  body: string;
}

const PostCard = ({ id, title, body }: PostCardProps) => {
  return (
    <Link href={`/post/${id}`} className='rounded bg-blue-500 p-3 text-white block'>
      <article className='text-wrap'>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='font-normal text-slate-100 text-sm'>{body}</p>
      </article>
    </Link>
  );
};

export default PostCard;
