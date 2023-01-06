import fs from 'fs';
import matter from 'gray-matter';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
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

    useEffect(() => {
    console.clear();
    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.3 } });

    const Height = document.querySelector('#height');
    const MoreReadButton = document.querySelector('#MoreRead');
    const MoreReadBox = document.querySelector('#MoreReadBox');
    const wh = window.innerHeight;

    MoreReadButton!.addEventListener('click', () => {
      tl.to(Height, { height: 2300 });
      tl.to(MoreReadButton, { opacity: 0, display: 'none' },">");
      tl.to(MoreReadBox, { opacity: 0, display: 'none' },">");
      tl.play();
    });


    }, []);

  const [agent, setAgent] = useState('');
  const [map, setMap] = useState('');

  // Function for multiple search filter
  const multipleSearch = (array: any) => {
    return array.filter((post: any) =>
      Object.keys(post.frontMatter.categories).some(
        (parameter) =>
          post.frontMatter.categories[parameter].toString().toLowerCase().includes(agent) &&
          post.frontMatter.categories[parameter].toString().toLowerCase().includes(map),
      ),
    );
  };

  const filtered = multipleSearch(posts);

  return (
    <div className='w-100 h-full bg-sub'>
      <main>
        <Top_bg />
        <Drop_down
          agent={agent}
          map={map}
          onChangeAgent={(e) => {
            setAgent(e.target.value);
          }}
          onChangeMap={(e) => {
            setMap(e.target.value);
          }}
        />
        <div className='m-auto w-11/12 pt-40 pb-20 '>
          <div
            className=' grid 2xl:h-[1390px]  m-auto 2xl:grid-cols-4 justify-between gap-10 overflow-hidden pb-3'
            id='height'
          >
            {filtered.map((post: any) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
          <div
            className='relative mt-10 h-[200px] w-full bg-main opacity-30'
            id='MoreReadBox'
          ></div>
          <p
            className='relative z-10 -mt-[120px] mb-20 text-center text-4xl text-btext'
            id='MoreRead'
          >
            ↓もっとみる
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
