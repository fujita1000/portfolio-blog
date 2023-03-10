import fs from 'fs';
import matter from 'gray-matter';
import { useState } from 'react';
import Drop_down from '../components/Drop_down';
import Top_bg from '../components/Top_bg';
import PostCard from '../components/postCard';

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

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1,
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
};

const Home = ({ posts }: any) => {
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');

  // Function for multiple search filter
  const multipleSearch = (array: any) => {
    return array.filter((post: any) =>
      Object.keys(post.frontMatter.categories).some(
        (parameter) =>
          post.frontMatter.categories[parameter].toString().toLowerCase().includes(category1) &&
          Object.keys(post.frontMatter.categories).some((parameter) =>
            post.frontMatter.categories[parameter].toString().toLowerCase().includes(category2),
          ),
      ),
    );
  };

  const filtered = multipleSearch(posts);

  return (
    <div className='w-100 h-full bg-sub'>
      <Top_bg />
      <Drop_down
        category1={category1}
        category2={category2}
        onChangeCategory1={(e) => {
          setCategory1(e.target.value);
        }}
        onChangeCategory2={(e) => {
          setCategory2(e.target.value);
        }}
      />
      <div className='m-auto w-[350px] md:w-11/12 lg:w-[900px] xl:w-11/12 pt-[50px] pb-20 md:pt-[100px] xl:pt-[130px] '>
        <div
          className='m-auto h-[1870px] md:h-[1920px] lg:h-[1940px] xl:h-[2080px] 2xl:h-[2300px] grid-cols-1 justify-between gap-[30px] overflow-hidden pb-3 md:grid-cols-2 lg:gap-[50px] md:gap-[40px] xl:grid-cols-3 xl:gap-[70px] 2xl:grid-cols-4 2xl:gap-[50px]'
          id='height'
        >
          <div className='grid md:grid-cols-2 lg:gap-[50px] md:gap-[40px] xl:grid-cols-3 xl:gap-[70px] 2xl:grid-cols-4 2xl:gap-[50px] grid-cols-1 justify-between gap-[30px]'>
            {filtered.map((post: any) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
