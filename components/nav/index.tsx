import Link from 'next/link';

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
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
