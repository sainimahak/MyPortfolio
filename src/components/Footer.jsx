import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-[#2176ff] py-6'>
      {/* Content: Centered text, responsive font size */}
      <div className='flex justify-center items-center text-white font-semibold text-center px-4'>
        <p className='text-sm md:text-lg tracking-wide'>
          © 2025 Mahak Saini. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
