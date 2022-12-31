import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
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
      posts: sortedPosts,
    },
  };
};

export const getStaticPaths = () => {
  const categories = ['ヴァイパー', 'ブリム' , 'アストラ', 'フェイド'];
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};

const Category = ({ posts }:any) => {
  return (
    <div>
      <div>
        {posts.map((post: any) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Category;