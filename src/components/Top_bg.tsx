import Image from "next/image";
import React from 'react';

const Top_bg = () =>
{
    return (
      <>
        <div className='relative '> 
        <h2 className='absolute z-10'>よく使う空爆やセット、壁抜きの記事を載せてるよ</h2>
          <div className='h-64 w-screen'>
            <Image src={'/header.jpg'} layout='fill' alt='背景画像'></Image>
          </div>
        </div>
      </>
    );
  }

export default Top_bg;
