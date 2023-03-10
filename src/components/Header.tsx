import { gsap } from 'gsap';
import Image from "next/image";
import Link from "next/link"
import { useEffect } from "react";

const Header = () => {

  useEffect(() => {

console.clear();
const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });

const playButton = document.querySelector('#play');
const Nav = document.querySelector('#nav');

playButton!.addEventListener('click', () => {
  tl.to(Nav, { x: '0%' });
  tl.play();
});

Nav!.addEventListener('click', () => {
  tl.to(Nav, { x: 2000, duration: 1 });
  tl.play();
});

  }, []);

  return (
    <header className='relative'>
      <div className='m-auto h-[60px] w-full bg-btext md:h-[70px] xl:h-[75px] '>
        <div className='m-auto flex h-[60px] w-11/12 items-center justify-between text-wtext md:h-[70px] xl:h-[75px]'>
          <Link href='/'>
            <div className='relative h-[50px] w-[50px] md:h-[60px] md:w-[60px] xl:h-[75px] xl:w-[75px]'>
              <Image
                src={'/dev/logo.png'}
                alt='ロゴ'
                layout='fill'
                objectFit='contain'
                loading='eager'
              ></Image>
            </div>
          </Link>
          <Link href='/'>
            <h1 className='text-2xl text-wtext md:text-[35px] xl:text-[45px]'>
              ポートフォリオ用ブログ
            </h1>
          </Link>

          <div className='p-1/2' id='play'>
            <svg
              className='h-[50px] w-[50px] text-wtext md:h-[60px] md:w-[60px] xl:h-[75px] xl:w-[75px]'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </div>
        </div>
      </div>

      <div className='fixed  top-0 right-0 z-50 h-screen translate-x-[1000px] bg-main ' id='nav'>
        <div>
          <div className='absolute right-[20px] top-[45px] h-[5px] w-[45px] rotate-45 bg-wtext'></div>
          <div className='absolute right-[20px] top-[45px] h-[5px] w-[45px] -rotate-45 bg-wtext'></div>
        </div>
        <h2 className='m-auto mt-[80px] w-11/12 text-[25px] text-wtext'>カテゴリー選択</h2>
        <div className='rtl-grid m-auto  mt-[30px] grid w-11/12 grid-cols-4 gap-6 lg:grid-cols-5 2xl:grid-cols-4 '>
          <Link href={'/categories/HTML'}>
            <Image src={'/portfolio/header/html.png'} alt='html' width={100} height={100} />
          </Link>
          <Link href={'/categories/CSS'}>
            <Image src={'/portfolio/header/css.png'} alt='css' width={100} height={100} />
          </Link>
          <Link href={'/categories/JavaScript'}>
            <Image
              src={'/portfolio/header/javascript.png'}
              alt='javascript'
              width={100}
              height={100}
            />
          </Link>
          <Link href={'/categories/TypeScript'}>
            <Image
              src={'/portfolio/header/typescript.png'}
              alt='typescript'
              width={100}
              height={100}
            />
          </Link>
          <Link href={'/categories/jQuery'}>
            <Image src={'/portfolio/header/jquery.png'} alt='jquery' width={100} height={100} />
          </Link>
          <Link href={'/categories/GSAP'}>
            <Image src={'/portfolio/header/gsap.png'} alt='gsap' width={100} height={100} />
          </Link>
          <Link href={'/categories/NPM'}>
            <Image src={'/portfolio/header/npm.png'} alt='npm' width={100} height={100} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header
