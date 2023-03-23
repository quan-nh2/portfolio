import React from 'react';

const Header = () => {
  return (
    <header className='py-8' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a
            href='#'
            className='text-gradient btn-link cursor-pointer text-[36px] py-2'
          >
            Impact
          </a>

          <div>
            <button className='btn btn-sm'>Work with me</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
