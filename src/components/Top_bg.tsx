import Image from "next/image";
import React from 'react';

const Top_bg = () =>
{
    return (
      <>
        <div className='h-76 relative w-full'>
          <h2 className=' relative z-10 translate-y-20 text-center text-4xl text-wtext'>
            よく使う空爆やセット、壁抜きの記事を載せてるよ
          </h2>
          <div className='h-64 w-screen'>
            <Image src={'/dev/header.jpg'} layout='fill' alt='背景画像'></Image>
          </div>
        </div>
      </>
    );
  }

export default Top_bg;
