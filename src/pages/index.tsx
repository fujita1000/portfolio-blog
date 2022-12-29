import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Drop_down from '../components/Drop_down/Drop_down';
import Pagination from '../components/Pagination/Pagination';
import PostCard from '../components/PostCard/postCard';
import Top_bg from '../components/Top_bg/Top_bg';
import styles from '../styles/Home.module.scss';
import { LIST_LIMIT } from '@/pages/api/pagination';

const range = (start:any, end:any, length = end - start + 1) => Array.from({ length }, (_, i) => start + i);

const Home = ( {posts, pages}:any) => {  

const [agent, setAgent] = useState('');
const [map, setMap] = useState('');

const multipleSearch = (array:any) => {
  return array.filter((el: any) =>   

    Object.keys(el).some(
      (parameter) =>
       el[parameter].toString().toLowerCase().includes(agent) &&
        el[parameter].toString().toLowerCase().includes(map),
    ),
  );
  }
    const filtered = multipleSearch(posts);
 

useEffect(() => {

}, []);

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
            {filtered.map((post: any) => (
              <PostCard key={post.slug} post={post} />  
               
            ))}
          </div>
          <Pagination pages={pages} />
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

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontMatter.date) > new Date(postB.frontMatter.date) ? -1 : 1,
  );

  const pages = range(1, Math.ceil(posts.length / LIST_LIMIT));

  return {
    props: {
      posts: sortedPosts.slice(0, LIST_LIMIT),
      pages,
    },
  };

};



 



export default Home;
