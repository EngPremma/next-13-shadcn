import Link from 'next/link';

const menuItems: { name: string; href: string }[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Users',
    href: '/users',
  },
  {
    name: 'Posts',
    href: '/posts',
  },
  {
    name: 'Admin',
    href: '/admin',
  },
];

const Nav = () => {
  return (
    <header>
      <nav className='mb-5'>
        <ul className='flex justify-around p-5 bg-amber-700 text-zinc-50'>
          {menuItems.map(menuItem => (
            <li className='hover:underline' key={menuItem.href}>
              <Link href={menuItem.href}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
