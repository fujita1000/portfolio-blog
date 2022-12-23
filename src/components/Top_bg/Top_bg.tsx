import Image from "next/image";
import React from 'react';
import styles from "./Top_bg.module.scss" ;

const Top_bg = () =>
{
    return (
      <>
        <div className={styles.top_bg}>
          <h2>よく使う空爆やセット、壁抜きの記事を載せてるよ</h2>
          <Image src={'/header.jpg'} layout='fill' alt='背景画像'></Image>
        </div>
      </>
    );
  }

export default Top_bg;
