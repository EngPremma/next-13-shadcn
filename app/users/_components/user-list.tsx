const mockFetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('data');
    }, 5000);
  });
};

const UserList = async () => {
  await mockFetchData();

  return <>UserList</>;
};

export default UserList;
