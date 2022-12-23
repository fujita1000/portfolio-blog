import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Drop_down from '../components/Drop_down/Drop_down';
import Top_bg from '../components/Top_bg/Top_bg';
import styles from '../styles/Home.module.scss';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <Top_bg />
    <Drop_down />
      </main>
    </div>
  );
}

export default Home
