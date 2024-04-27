import Link from 'next/link';
import { auth, currentUser } from '@clerk/nextjs/server';

const products = [
  {
    name: 'T-shirt',
    id: 't-shirrec34',
  },
  {
    name: 'Pants',
    id: 'dpatne',
  },
  {
    name: 'Pants',
    id: 'ddfpatne',
  },
  {
    name: 'Pants',
    id: 'ddcxcfpatne',
  },
];

const Home = async () => {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <main>
      {userId ? (
        <div className='mb-10'>
          <h1 className='text-4xl font-bold'>
            Hi, {user?.firstName} {user?.lastName}
          </h1>
        </div>
      ) : null}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
        {products.map(product => (
          <div key={product.id} className='rounded-lg bg-gray-300 p-2 flex justify-center flex-col'>
            <p className='text-center text-md mb-2'>{product.name}</p>
            <Link href={`/product/${product.id}`} className='bg-blue-700 text-white rounded-md text-center'>
              View Detail
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
