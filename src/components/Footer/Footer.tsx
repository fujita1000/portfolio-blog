import Image from 'next/image';
import Link from "next/link"
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.f_text}>
          <Link href='/'><p>HOME</p></Link>
          <p>ABOUT ME</p>
        </div>
        <Link href='/'>
        <Image src={'/logo.png'} alt='VALORANT火薬庫のロゴ' width={200} height={200}></Image>
        </Link>
        <Image src={'/twitter_logo.svg'} alt='twitterのロゴ' width={200} height={200}></Image>
      </div>
      <p className={styles.copyright}>Copyright - Oomiya, 2022 All Rights Reserved.</p>
    </footer>
  );
}

export default Footer
