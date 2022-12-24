import Image from "next/image";
import Link from "next/link"
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <Link href='/'>
          <Image src={'/logo.png'} alt='ロゴ' width={70} height={70}></Image>
        </Link>
        <Link href='/'>
          <h1 className={styles.title}>VALORANT火薬庫</h1>
        </Link>
        <div className={styles.nav_open}>
          <div className={styles.open_bar}></div>
          <div className={styles.open_bar}></div>
          <div className={styles.open_bar}></div>
        </div>
      </div>
    </header>
  );
}

export default Header
