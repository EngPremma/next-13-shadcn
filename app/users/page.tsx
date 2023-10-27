import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { queryKeys } from './constants';
import { catApi } from '@/api';
import UserList from './components/user-list';

const UsersPage = async ({ searchParams }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKeys.getUsers(),
    queryFn: () => catApi.getUsers(1, 20),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      UsersPage
      <UserList />
    </HydrationBoundary>
  );
};

export default UsersPage;
