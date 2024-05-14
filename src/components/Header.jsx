import Link from 'next/link';
import Image from 'next/image'
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex items-center gap-4'>
        <Link href={''} className='flex gap-1 items-center'>
          <Image src="/appcent.png" width={170} height={200} alt="logo"/>
          <span className='text-3xl font-bold py-1 px-2 rounded-lg'>
            Movie App
          </span>
        </Link>
      </div>
      <div className='flex gap-4'>
        <DarkModeSwitch />
        <MenuItem title='home' address='/' Icon={AiFillHome} />
        <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  );
}
