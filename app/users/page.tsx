import { getPosts } from '@/server/actions/post';
import { Suspense } from 'react';

import PostsList from './_components/postsList';
import PaginationButton from './_components/pagination';

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const Users = async ({ searchParams }: Props) => {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 10;

  const posts = await getPosts({ page, limit });

  return (
    <>
      Users
      <Suspense key={`${page}-${limit}`} fallback={<div>loading...</div>}>
        <PostsList searchParams={searchParams} />
      </Suspense>
      <p>Page: {page}</p>
      <p>Limit: {limit}</p>
      <PaginationButton searchParams={searchParams} />
    </>
  );
};

export default Users;
