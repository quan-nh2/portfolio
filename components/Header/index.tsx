import Image from 'next/image';

import Logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <Image src={Logo} priority alt='' />
          </a>
          <button className='btn btn-sm'>Contact me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
