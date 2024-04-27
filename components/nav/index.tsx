import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

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
];

const Nav = () => {
  return (
    <header>
      <nav className='mb-5 p-5 bg-slate-600 text-zinc-50 flex justify-between items-center'>
        <ul className='grid grid-cols-3 gap-10'>
          {menuItems.map(menuItem => (
            <li className='hover:underline' key={menuItem.href}>
              <Link href={menuItem.href}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
