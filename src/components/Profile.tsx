import Image from 'next/image';
import React from 'react';

const Profile = () => {
  return (
    <>
      <div className='h-[478px] w-full bg-main -mt-[5px]'>
        <div className='relative top-[15px] m-auto h-[150px] w-[150px] rounded-2xl'>
          <Image
            src={'/dev/demo.jpg'}
            alt='demoのロゴ'
            layout='fill'
            priority={true}
            objectFit='contain'
            className='rounded-[50%]'
          />
        </div>
        <div className='m-auto mt-10 w-11/12 text-center'>
          <h3 className='text-3xl text-wtext'>fujita</h3>
          <p className='mt-4 text-wtext'>
            ポートフォリオ用のDEMOの文章です。ポートフォリオ用のDEMOの文章です。ポートフォリオ用のDEMOの文章です。ポートフォリオ用のDEMOの文章です。ポートフォリオ用のDEMOの文章です。ポートフォリオ用のDEMOの文章です。ポートフォリオ用のDEMOの文章です。
          </p>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/demodemodemo99545459'>
            <p className='mt-4 text-blue-200'>→Twitter:Demo</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Profile;
