import Image from "next/image";
import Link from "next/link"

const Header = () => {
  return (
    <header className='w-250 m-auto h-20 bg-btext'>
      <div className='m-auto flex h-20 w-10/12  items-center justify-between text-wtext'>
        <Link href='/'>
          <Image src={'/logo.png'} alt='ロゴ' width={70} height={70}></Image>
        </Link>
        <Link href='/'>
          <h1 className='text-5xl text-wtext'>VALORANT火薬庫</h1>
        </Link>
        <div>
          <div className='my-4 h-1 w-16 bg-white'></div>
          <div className='my-4 h-1 w-16 bg-white'></div>
          <div className='my-4 h-1 w-16 bg-white'></div>
        </div>
      </div>
    </header>
  );
}

export default Header
