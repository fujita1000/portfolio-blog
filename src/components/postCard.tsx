import Image from 'next/image';
import Link from 'next/link';
import { post } from '../utils/types';

const PostCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className='h-100 my-4 w-[370px] 2xl:w-full '>
          <div>
            <Image
              src={`/${post.frontMatter.image}`}
              width={600}
              height={400}
              alt={post.frontMatter.title}
            />
          </div>
          <div>
            <h1 className='2xl:mt-4 2xl:text-xl'>{post.frontMatter.title}</h1>
            <p className='2xl:mt-4'>{post.frontMatter.date}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;