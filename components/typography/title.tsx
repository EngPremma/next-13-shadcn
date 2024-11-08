export interface TitleProps {
  /** Title contents */
  label: string;
}

const Title = ({ label }: TitleProps) => {
  return <p className='text-3xl'>{label}</p>;
};

export default Title;
