import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

const colors = [
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Black', value: 'black' },
];

const DEFAULT_COLOR = 'blue';

const ProductDetail = async (props: Props) => {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const selectedColor = searchParams.color || DEFAULT_COLOR;

  return (
    <>
      <p className='text-sm'>Time: {new Date().toLocaleString()}</p>
      <p className='text-3xl font-semibold'>ProductDetail</p>
      <p className='mb-2'>Product ID: {params.id}</p>
      <div className='flex space-x-2'>
        {colors.map(color => {
          const isSelected = selectedColor === color.value ? 'border-blue-600' : '';
          return (
            <Link
              key={color.value}
              href={`?${new URLSearchParams({ color: color.value })}`}
              className={`bg-gray-300 rounded-full p-2 border-2 ${isSelected}`}
              replace
            >
              {color.label}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetail;
