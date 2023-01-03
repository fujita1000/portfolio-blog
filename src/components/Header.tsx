import Image from "next/image";
import Link from "next/link"
import { useEffect } from "react";
import {width ,height} from "../pages/api/AgentIcon"; 

const Header = () => {

  useEffect(() => {

  }, []);

  return (
    <header className='relative'>
      <div className='w-250 m-auto h-[70px] bg-btext'>
        <div className='m-auto flex h-[70px] w-11/12  items-center justify-between text-wtext'>
          <Link href='/'>
            <Image src={'/logo.png'} alt='ロゴ' width={65} height={65}></Image>
          </Link>
          <Link href='/'>
            <h1 className='text-5xl text-wtext'>VALORANT火薬庫</h1>
          </Link>

          <div className='p-1/2'>
            <svg
              className='h-[65px] w-[65px] text-wtext'
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

      <div className='fixed  top-0 right-0 z-50 h-screen w-2/4 bg-main'>
        <div>
          <div className='absolute right-[40px] top-[45px] h-[5px] w-[65px] rotate-45 bg-wtext'></div>
          <div className='absolute right-[40px] top-[45px] h-[5px] w-[65px] -rotate-45 bg-wtext'></div>
        </div>
        <h2 className='m-auto mt-[30px] w-11/12 text-3xl text-wtext'>
          エージェントを選択してください
        </h2>
        <div className='rtl-grid m-auto  mt-[30px] grid w-11/12 grid-cols-5 gap-6 '>
          <Image src={'/agent/astra.png'} alt='アストラ' width={width} height={height} />
          <Image src={'/agent/viper.png'} alt='ヴァイパー' width={width} height={height} />
          <Image src={'/agent/omen.png'} alt='オーメン' width={width} height={height} />
          <Image src={'/agent/killjoy.png'} alt='キルジョイ' width={width} height={height} />
          <Image src={'/agent/kay_o.png'} alt='KAY/O' width={width} height={height} />
          <Image src={'/agent/cypher.png'} alt='サイファー' width={width} height={height} />
          <Image src={'/agent/jett.png'} alt='ジェット' width={width} height={height} />
          <Image src={'/agent/sky.png'} alt='スカイ' width={width} height={height} />
          <Image src={'/agent/sage.png'} alt='セージ' width={width} height={height} />
          <Image src={'/agent/sova.png'} alt='ソーヴァ' width={width} height={height} />
          <Image src={'/agent/chember.png'} alt='チェンバー' width={width} height={height} />
          <Image src={'/agent/neon.png'} alt='ネオン' width={width} height={height} />
          <Image src={'/agent/harbor.png'} alt='ハーバー' width={width} height={height} />
          <Image src={'/agent/fade.png'} alt='フェイド' width={width} height={height} />
          <Image src={'/agent/phoenix.png'} alt='フェニックス' width={width} height={height} />
          <Image src={'/agent/bleach.png'} alt='ブリーチ' width={width} height={height} />
          <Image src={'/agent/brim.png'} alt='ブリム' width={width} height={height} />
          <Image src={'/agent/yoru.png'} alt='ヨル' width={width} height={height} />
          <Image src={'/agent/raze.png'} alt='レイズ' width={width} height={height} />
          <Image src={'/agent/rayna.png'} alt='レイナ' width={width} height={height} />
        </div>
      </div>
    </header>
  );
}

export default Header
