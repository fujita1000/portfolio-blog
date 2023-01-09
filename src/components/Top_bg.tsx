import Image from "next/image";
import React from 'react';

const Top_bg = () =>
{
    return (
      <>
        <div className='relative w-full'>
          <h2 className='relative z-10 w-full translate-y-[45px] text-center text-[16px] text-wtext md:translate-y-[90px] md:text-[30px] 2xl:translate-y-[110px]  xl:text-[40px] 2xl:text-[50px]'>
            よく使う空爆やセット、壁抜きの記事を載せてるよ
          </h2>
          <div className='h-[120px] w-screen md:h-[200px] xl:h-[200px] 2xl:h-[250px]'>
            <Image src={'/dev/header.jpg'} layout='fill' alt='背景画像' priority={true} ></Image>
          </div>
        </div>
      </>
    );
  }

export default Top_bg;
