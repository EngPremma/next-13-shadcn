import { getPosts } from '@/server/actions/post';

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const PostsList = async ({ searchParams }: Props) => {
  function later(delay: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  }
  await later(2000);
  // await getPosts({ page: 1, limit: 10 });
  return <div>PostsList</div>;
};

export default PostsList;
