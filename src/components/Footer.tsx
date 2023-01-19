import Image from 'next/image';
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='w-full bg-main pt-4 text-wtext 2xl:pt-10'>
      <div className='m-auto flex  w-11/12 items-center justify-between'>
        <div className='text-1xl'>
          <Link href='/'>
            <p className='my-4 md:text-[20px] 2xl:text-[30px]'>HOME</p>
          </Link>
          <Link href='/privacy-policy'>
            <p className='my-4 md:text-[20px] 2xl:text-[30px]'>ABOUT ME</p>
          </Link>
        </div>
        <Link href='/'>
          <div className='relative h-[100px] w-[100px] md:h-[120px] md:w-[120px] 2xl:h-[150px] 2xl:w-[150px]'>
            <Image
              src={'/dev/logo.png'}
              alt='VALORANT火薬庫のロゴ'
              layout='fill'
              objectFit='contain'
            ></Image>
          </div>
        </Link>
        <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/OomiyaGG'>
          <div className='relative h-[100px] w-[100px]  md:h-[120px] md:w-[120px] 2xl:h-[150px] 2xl:w-[150px]'>
            <Image
              src={'/dev/twitter_logo.svg'}
              alt='twitterのロゴ'
              layout='fill'
              objectFit='contain'
            ></Image>
          </div>
        </a>
      </div>
      <p className='text-[14px] 2xl:pb-10 py-4 text-center md:text-[20px] 2xl:text-[30px]'>
        Copyright - <Link href='/'>Fujita</Link>, 2023 All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer
