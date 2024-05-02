const LoadingPostsPage = () => {
  return (
    <>
      <div className='my-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {[...Array(10)].map((_, index) => (
          <div key={index} className='animate-pulse rounded bg-blue-500 p-3 text-white'>
            <article className='flex-1 space-y-6 py-1'>
              <div className='h-2 bg-white rounded w-20'></div>
              <div className='h-1 bg-white rounded'></div>
              <div className='h-1 bg-white rounded'></div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};

export default LoadingPostsPage;
