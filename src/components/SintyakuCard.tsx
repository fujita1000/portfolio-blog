
import Image from 'next/image';
import Link from 'next/link';
import { post } from '../utils/types';

const SintyakuCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className='h-100 mt-[10px] mb-8  w-[370px] 2xl:w-[400px] '>
          <div>
            <Image
              src={`/${post.frontMatter.image}`}
              width={325}
              height={183}
              alt={post.frontMatter.title}
            />
          </div>
          <div className='w-[325px]'>
            <h1>{post.frontMatter.title}</h1>
            <p>{post.frontMatter.date}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SintyakuCard;
