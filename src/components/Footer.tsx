import Image from 'next/image';
import Link from "next/link"

const Footer = () => {
  return (
    <footer className='w-full bg-main pt-24 text-wtext'>
      <div className='m-auto flex  h-60 w-11/12 items-center justify-between'>
        <div className='text-5xl'>
          <Link href='/'>
            <p className='my-4'>HOME</p>
          </Link>
          <Link href='/privacy-policy'>
            <p className='my-4'>ABOUT ME</p>
          </Link>
        </div>
        <Link href='/'>
          <Image src={'/logo.png'} alt='VALORANT火薬庫のロゴ' width={200} height={200}></Image>
        </Link>
        <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/OomiyaGG'>
          <Image src={'/twitter_logo.svg'} alt='twitterのロゴ' width={200} height={200}></Image>
        </a>
      </div>
      <p className='py-4 text-center text-3xl'>
        Copyright - <Link href='/'>Marumazi</Link>, 2022 All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer
