import fs from 'fs';
import matter from 'gray-matter';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Drop_down from '../../components/Drop_down/Drop_down';
import Pagination from '../../components/Pagination/Pagination';
import PostCard from '../../components/PostCard/postCard';
import Top_bg from '../../components/Top_bg/Top_bg';
import styles from '../../styles/Home.module.scss';
import { LIST_LIMIT } from '@/pages/api/pagination';

interface Home {
  page: number;
}

const Page: NextPage<Home> = ({ posts, pages, current_page }: any) => {
  const [agent, setAgent] = useState('');
  const [map, setMap] = useState('');
// 複数検索機能
    const multipleSearch = (array: any) => {
      return array.filter((el: any) =>
        Object.keys(el).some(
          (parameter) =>
            el[parameter].toString().toLowerCase().includes(map) &&
            el[parameter].toString().toLowerCase().includes(agent),
        ),
      );
    };

    const filtered = multipleSearch(posts);


  console.log(posts);
  return (
    <div className={styles.container}>
      <main>
        <Top_bg />
        <Drop_down
          agent={agent}
          map={map}
          onChangeAgent={(e) => setAgent(e.target.value)}
          onChangeMap={(e) => setMap(e.target.value)}
        />
        <div>
          <div className={styles.PostCard}>
           {filtered.map((post: any)  => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <Pagination pages={pages} current_page={current_page} />
        </div>
      </main>
    </div>
  );
};

const range = (start:any, end:any, length = end - start + 1) => Array.from({ length }, (_, i) => start + i);

export async function getStaticPaths() {
  // 記事を取得
  const files = fs.readdirSync('posts');
  const count = files.length;

  const paths = range(1, Math.ceil(count / LIST_LIMIT)).map((i) => ({
    params: { page: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const current_page = params.page;
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

  const pages = range(1, Math.ceil(posts.length / LIST_LIMIT));

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1,
  );

  const slicedPosts = sortedPosts.slice(LIST_LIMIT * (current_page - 1), LIST_LIMIT * current_page);

  return {
    props: {
      posts: slicedPosts,
      pages,
      current_page,
    },
  };
}

export default Page;
