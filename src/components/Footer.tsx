import Image from 'next/image';
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='w-full bg-main text-wtext pt-24'>
      <div className='m-auto flex  h-60 w-11/12 items-center justify-between'>
        <div className='text-5xl'>
          <Link href='/'>
            <p className='my-4'>HOME</p>
          </Link>
          <p className='my-4'>ABOUT ME</p>
        </div>
        <Link href='/'>
          <Image src={'/logo.png'} alt='VALORANT火薬庫のロゴ' width={200} height={200}></Image>
        </Link>
        <Image src={'/twitter_logo.svg'} alt='twitterのロゴ' width={200} height={200}></Image>
      </div>
      <p className='text-3xl py-4 text-center'>Copyright - Marumazi, 2022 All Rights Reserved.</p>
    </footer>
  );
}

export default Footer
