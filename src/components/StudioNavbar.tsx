import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div>
        <Link href='/' className='text-[#F7AB0A] p-4 flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A] mr-2'/>
          Go To Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
