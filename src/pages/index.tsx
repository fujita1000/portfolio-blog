import fs from 'fs';
import matter from 'gray-matter';
import { useEffect, useState} from 'react';
import Drop_down from '../components/Drop_down';
import Pagination from '../components/Pagination';
import Top_bg from '../components/Top_bg';
import PostCard from '../components/postCard';
import { LIST_LIMIT } from '@/pages/api/pagination';

const range = (start:any, end:any, length = end - start + 1) => Array.from({ length }, (_, i) => start + i);


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


const Home = ({ posts, pages }: any) => {
  const [agent, setAgent] = useState('');
  const [map, setMap] = useState('');     

  //Function for multiple search filter
  const multipleSearch = (array :any) => {

    return array.filter((el: any) =>
      Object.keys(el).some(
        (parameter) =>
          el[parameter].toString().toLowerCase().includes(agent) &&
          el[parameter].toString().toLowerCase().includes(map),
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
            setAgent(e.target.value), console.log(agent);
          }}
          onChangeMap={(e) => {
            setMap(e.target.value), console.log(map);
          }}
        />
        <div className='m-auto w-10/12 pt-40 pb-20 '>
          <div className='flex flex-wrap justify-between'>
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






 



export default Home;
