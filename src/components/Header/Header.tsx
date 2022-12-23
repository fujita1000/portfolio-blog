import Image from "next/image";
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.main}>
        <Image src={'/logo.png'} alt='ロゴ' width={70} height={70}></Image>
        <h1 className={styles.title}>VALORANT火薬庫</h1>
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
