import fs from 'fs';
import matter from 'gray-matter';
import { useEffect, useState} from 'react';
import Drop_down from '../components/Drop_down';
import Top_bg from '../components/Top_bg';
import PostCard from '../components/postCard';
import { LIST_LIMIT } from '@/pages/api/ReadMore';




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


const Home = ({ posts}: any) => {
  
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
          <div className='-mt-10 flex flex-wrap justify-between'>
            {filtered.map((post: any) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};






 



export default Home;
