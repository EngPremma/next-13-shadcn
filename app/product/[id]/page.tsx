import Link from 'next/link';

type Props = {
  params: { id: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const colors = [
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Black', value: 'black' },
];

const DEFAULT_COLOR = 'blue';

const ProductDetail = ({ params, searchParams }: Props) => {
  const selectedColor = searchParams.color || DEFAULT_COLOR;

  return (
    <div>
      <p className='text-3xl'>ProductDetail</p>
      <p className='mb-2'>Product ID: {params.id}</p>
      <div className='flex space-x-2'>
        {colors.map(color => {
          const isSelected = selectedColor === color.value ? 'border-blue-600' : '';
          return (
            <Link
              key={color.value}
              href={`?${new URLSearchParams({ color: color.value })}`}
              className={`bg-gray-300 rounded-full p-2 border-2 ${isSelected}`}
            >
              {color.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
