import { gsap } from 'gsap';
import Image from "next/image";
import Link from "next/link"
import { useEffect } from "react";
import {width ,height} from "../pages/api/AgentIcon"; 

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
              <Image src={'/dev/logo.png'} alt='ロゴ' layout='fill' objectFit='contain'></Image>
            </div>
          </Link>
          <Link href='/'>
            <h1 className='text-2xl text-wtext md:text-[35px] xl:text-[45px]'>VALORANT火薬庫</h1>
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
        <h2 className='m-auto mt-[80px] w-11/12 text-[25px] text-wtext'>エージェントを選択</h2>
        <div className='rtl-grid m-auto  mt-[30px] grid w-11/12 grid-cols-4 gap-6 lg:grid-cols-5 2xl:grid-cols-4 '>
          <Link href={'/categories/アストラ'}>
            <Image src={'/agent/astra.png'} alt='アストラ' width={width} height={height} />
          </Link>
          <Link href={'/categories/ヴァイパー'}>
            <Image src={'/agent/viper.png'} alt='ヴァイパー' width={width} height={height} />
          </Link>
          <Link href={'/categories/オーメン'}>
            <Image src={'/agent/omen.png'} alt='オーメン' width={width} height={height} />
          </Link>
          <Link href={'/categories/キルジョイ'}>
            <Image src={'/agent/killjoy.png'} alt='キルジョイ' width={width} height={height} />
          </Link>
          <Link href={'/categories/ケイオー'}>
            <Image src={'/agent/kay_o.png'} alt='ケイオー' width={width} height={height} />
          </Link>
          <Link href={'/categories/サイファー'}>
            <Image src={'/agent/cypher.png'} alt='サイファー' width={width} height={height} />
          </Link>
          <Link href={'/categories/ジェット'}>
            <Image src={'/agent/jett.png'} alt='ジェット' width={width} height={height} />
          </Link>
          <Link href={'/categories/スカイ'}>
            <Image src={'/agent/sky.png'} alt='スカイ' width={width} height={height} />
          </Link>
          <Link href={'/categories/セージ'}>
            <Image src={'/agent/sage.png'} alt='セージ' width={width} height={height} />
          </Link>
          <Link href={'/categories/ソーヴァ'}>
            <Image src={'/agent/sova.png'} alt='ソーヴァ' width={width} height={height} />
          </Link>
          <Link href={'/categories/チェンバー'}>
            <Image src={'/agent/chember.png'} alt='チェンバー' width={width} height={height} />
          </Link>
          <Link href={'/categories/ネオン'}>
            <Image src={'/agent/neon.png'} alt='ネオン' width={width} height={height} />
          </Link>
          <Link href={'/categories/ハーバー'}>
            <Image src={'/agent/harbor.png'} alt='ハーバー' width={width} height={height} />
          </Link>
          <Link href={'/categories/フェイド'}>
            <Image src={'/agent/fade.png'} alt='フェイド' width={width} height={height} />
          </Link>
          <Link href={'/categories/フェニックス'}>
            <Image src={'/agent/phoenix.png'} alt='フェニックス' width={width} height={height} />
          </Link>
          <Link href={'/categories/ブリーチ'}>
            <Image src={'/agent/bleach.png'} alt='ブリーチ' width={width} height={height} />
          </Link>
          <Link href={'/categories/ブリム'}>
            <Image src={'/agent/brim.png'} alt='ブリム' width={width} height={height} />
          </Link>
          <Link href={'/categories/ヨル'}>
            <Image src={'/agent/yoru.png'} alt='ヨル' width={width} height={height} />
          </Link>
          <Link href={'/categories/レイズ'}>
            <Image src={'/agent/raze.png'} alt='レイズ' width={width} height={height} />
          </Link>
          <Link href={'/categories/レイナ'}>
            <Image src={'/agent/rayna.png'} alt='レイナ' width={width} height={height} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header
