import Image from 'next/image';
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.main}>
        <div className={styles.f_text}>
          <p>HOME</p>
          <p>ABOUT ME</p>
        </div>
        <Image src={'/logo.png'} alt='twitterのロゴ' width={200} height={200}></Image>
        <Image src={'/twitter_logo.svg'} alt='twitterのロゴ' width={200} height={200}></Image>
      </div>
      <p className={styles.copyright}>Copyright - Marumazi, 2022 All Rights Reserved.</p>
    </footer>
  );
}

export default Footer
