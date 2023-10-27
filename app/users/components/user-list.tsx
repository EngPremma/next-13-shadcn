'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { queryKeys } from '../constants';
import { catApi } from '@/api';

type CatsResponse = {
  cats: {
    age: string;
    breed: string;
    createdAt: string;
    name: string;
    updatedAt: string;
    _id: string;
  }[];
};

const UserList = () => {
  const [queryParams] = useState({
    page: 1,
    limit: 20,
  });
  const { data } = useQuery<CatsResponse, Error>({
    queryKey: queryKeys.getUsers(),
    queryFn: () => catApi.getUsers(queryParams.page, queryParams.limit),
  });

  return (
    <div>
      {data?.cats.length &&
        data?.cats.map(cat => {
          return (
            <React.Fragment key={cat._id}>
              {cat.name}
              <br />
              <br />
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default UserList;
