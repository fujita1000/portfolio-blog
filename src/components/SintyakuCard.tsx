
import Image from 'next/image';
import Link from 'next/link';
import { post } from '../utils/types';

const SintyakuCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className='mt-[10px] pb-8'>
          <div className='relative h-[200px] w-[350px] md:h-[281px] md:w-[500px] xl:h-[225px] xl:w-full'>
            <Image src={`/${post.frontMatter.image}`} layout='fill' alt={post.frontMatter.title} />
          </div>
          <div className='mt-[20px] w-[325px]'>
            <h1>{post.frontMatter.title}</h1>
            <p>{post.frontMatter.date}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SintyakuCard;
