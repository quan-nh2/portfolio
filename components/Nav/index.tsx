import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className='container mx-auto'>
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          <Link
            className={`${
              router.asPath === '/#home' ? 'active' : ''
            } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
            href='#home'
          >
            <BiHomeAlt />
          </Link>
          <Link
            className={`${
              router.asPath === '/#about' ? 'active' : ''
            } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
            href='#about'
          >
            <BiUser />
          </Link>
          <Link
            className={`${
              router.asPath === '/#services' ? 'active' : ''
            } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
            href='#services'
          >
            <BsClipboardData />
          </Link>
          <Link
            className={`${
              router.asPath === '/#work' ? 'active' : ''
            } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
            href='#work'
          >
            <BsBriefcase />
          </Link>
          <Link
            className={`${
              router.asPath === '/#contact' ? 'active' : ''
            } cursor-pointer w-[60px] h-[60px] flex items-center justify-center`}
            href='#contact'
          >
            <BsChatSquareText />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
