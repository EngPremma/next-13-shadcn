import Link from 'next/link';

const Nav = () => {
  return (
    <header>
      <nav className='mb-5'>
        <ul className='flex justify-around p-5 bg-slate-600 text-zinc-50'>
          <li className='hover:underline'>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
