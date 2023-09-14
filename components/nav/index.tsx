import Link from 'next/link';

const menus = [
  { label: 'Home', href: '/' },
  { label: 'Users', href: '/users' },
  { label: 'Todos', href: '/todos' },
];

const Nav = () => {
  return (
    <header>
      <nav className='mb-5'>
        <ul className='flex justify-around p-5 bg-slate-600 text-zinc-50'>
          {menus.map(menu => (
            <Link key={menu.href} href={menu.href} className='hover:underline'>
              {menu.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
