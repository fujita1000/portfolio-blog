import Image from "next/image";
import React from 'react';
import styles from "./Top_bg.module.scss" ;

const Top_bg = () =>
{
    return (
      <>
        <div className={styles.top_bg}>
          <Image src={'/header.jpg'} layout='fill' alt='背景画像'></Image>
        </div>
      </>
    );
  }

export default Top_bg;
