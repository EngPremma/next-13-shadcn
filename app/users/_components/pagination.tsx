import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const limitPage = [
  { value: '10', label: 10 },
  { value: '20', label: 20 },
];

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const PaginationButton = ({ searchParams }: Props) => {
  const page = Number(searchParams.page) || 1;
  const limit = searchParams.limit || 10;

  return (
    <div className='border-[1px] border-fuchsia-500 p-2'>
      PaginationButton
      <div className='mb-2'>
        <p className='font-bold mb-2'>Page</p>
        <Button variant='outline'>
          <Link
            href={`?${new URLSearchParams({ ...searchParams, page: String(page - 1) })}`}
            className={cn({ 'pointer-events-none opacity-50': page === 1 })}
          >
            prev
          </Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href={`?${new URLSearchParams({ ...searchParams, page: String(page + 1) })}`}>next</Link>
        </Button>
      </div>
      <div>
        <p className='text-bold mb-2'>Limit</p>
        {limitPage.map(item => (
          <Button key={item.value} asChild variant='outline'>
            <Link
              href={`?${new URLSearchParams({ ...searchParams, limit: item.value })}`}
              className={cn(limit === item.value && 'font-bold')}
            >
              {item.label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PaginationButton;
