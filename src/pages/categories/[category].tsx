import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import React from 'react';
import PostCard from '@/components/postCard';
import { LIST_LIMIT } from '@/pages/api/ReadMore';

export const getStaticProps = ({ params }:any) => {
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

  const category = params.category;


  const filteredPosts = posts.filter((post) => {
    return post.frontMatter.categories.includes(category);
  });

  const sortedPosts = filteredPosts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1,
  );


  return {
    props: {
      category,
      posts: sortedPosts,
    },
  };
};

export const getStaticPaths = () => {
  const categories = [
    'アストラ',
    'ヴァイパー',
    'オーメン',
    'キルジョイ',
    'KAY/O',
    'サイファー',
    'ジェット',
    'スカイ',
    'セージ',
    'ソーヴァ',
    'ネオン',
    'ハーバー',
    'フェイド',
    'フェニックス',
    'ブリム',
    'ブリーチ',
    'ヨル',
    'レイズ',
    'レイナ',
    'アイスボックス',
    'アセント',
    'スプリット',
    'バインド',
    'パール',
    'フラクチャー',
    'ブリーズ',
    'ヘイブン',
  ];
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};

const Category = ({ posts, category, pages }: any) => {
  return (
    <div className='w-100 h-full bg-sub'>
      <div className='m-auto w-11/12 pt-16 pb-20 '>
        <h1 className='mb-16 text-4xl'>{category}</h1>
        <div className='-mt-10 flex flex-wrap justify-between'>
          {posts.map((post: any) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;