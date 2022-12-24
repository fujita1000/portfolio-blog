import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Drop_down from '../components/Drop_down/Drop_down';
import PostCard from '../components/PostCard/postCard';
import Top_bg from '../components/Top_bg/Top_bg';
import styles from '../styles/Home.module.scss';
import {posts, post} from "../utils/types"

const Home= ({ posts }:posts) => {   
    console.log(posts)
  return (
    <div className={styles.container}>
      <main>
        <Top_bg />
        <Drop_down />

        <div>
          <div className={styles.PostCard}>
            {posts.map((post: post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
