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
    name: 'Dashboard',
    href: '/dashboard',
  },
];

const Nav = () => {
  return (
    <header>
      <nav className='mb-5'>
        <ul className='flex justify-around p-5 bg-slate-600 text-zinc-50'>
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
