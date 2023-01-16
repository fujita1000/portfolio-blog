import Image from "next/image";
import React from 'react';

const Top_bg = () =>
{
    return (
      <>
        <div className='relative w-full'>
          <h2 className='relative z-10 w-full translate-y-[45px] text-center text-[16px] text-btext md:translate-y-[90px] md:text-[30px] 2xl:translate-y-[110px]  xl:text-[40px] 2xl:text-[50px]'>
            勉強した知識のアウトプットブログ
          </h2>
          <div className='h-[120px] w-screen md:h-[200px] xl:h-[200px] 2xl:h-[250px]'>
            <Image
              src={'/dev/demo-top.jpg'}
              layout='fill'
              objectFit='cover'
              alt='背景画像'
              priority={true}
            ></Image>
          </div>
        </div>
      </>
    );
  }

export default Top_bg;
