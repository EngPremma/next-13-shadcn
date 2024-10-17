import React from 'react';

const mockFetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('data');
    }, 2000);
  });
};

const UserList = async () => {
  await mockFetchData();

  return <>UserList</>;
};

export default UserList;
