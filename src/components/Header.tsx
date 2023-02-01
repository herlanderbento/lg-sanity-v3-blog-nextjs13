import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href={'/'}>
          <Image
            height={50}
            width={50}
            src='https://links.papareact.com/1m8'
            className='rounded-full object-cover'
            alt='logo'
          />
        </Link>
        <h1>The PAPAFAM</h1>
      </div>

      <div>
        <Link
          href='https://www.papareact.com/universityofcode'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full'>
          Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
}
