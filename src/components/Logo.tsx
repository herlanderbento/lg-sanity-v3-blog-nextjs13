import Image from 'next/image';

export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-2'>
      <Image
        height={50}
        width={50}
        src='https://links.papareact.com/1m8'
        className='rounded-full object-cover'
        alt='logo'
      />
      <>{renderDefault(props)}</>
    </div>
  );
}
