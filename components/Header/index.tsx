import Image from 'next/image';

import Logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <header className='py-8' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a
            href='#'
            className='text-gradient btn-link cursor-pointer text-[36px]'
          >
            Impact
          </a>

          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
