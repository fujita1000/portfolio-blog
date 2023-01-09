import fs from 'fs';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';
import React from 'react';
import PostCard from '@/components/postCard';

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
    'ケイオー',
    'サイファー',
    'ジェット',
    'スカイ',
    'セージ',
    'ソーヴァ',
    'チェンバー',
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
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          url: `http:localhost:3000/categories/${category}`,
          title: category,
        }}
      />
      <></>
      <div className='w-100 h-full bg-sub'>
        <div className='m-auto w-[350px] pt-[40px] pb-20 md:w-11/12 xl:pt-[60px] '>
          <h1 className='mb-[20px] text-3xl md:text-4xl xl:mb-[40px] xl:text-5xl'>{category}</h1>
          <div
            className='m-auto grid grid-cols-1 justify-between gap-[30px]  pb-3 md:grid-cols-2  md:gap-[40px] xl:grid-cols-3 xl:gap-[80px] 2xl:grid-cols-4    2xl:gap-[30px]'
            id='height'
          >
            {posts.map((post: any) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;