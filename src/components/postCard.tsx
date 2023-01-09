import Image from 'next/image';
import Link from 'next/link';
import { post } from '../utils/types';

const PostCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className='my-4 h-[250px] w-[350px] lg:w-full xl:w-[350px] 2xl:mb-[150px] 2xl:w-[400px]'>
          <div className='relative mb-4 h-[197px] w-[350px] lg:w-full xl:w-[350px] 2xl:h-[225px] 2xl:w-[400px]'>
            <Image src={`/${post.frontMatter.image}`} alt={post.frontMatter.title} layout='fill' />
            <div className='absolute top-[10px]  left-[10px] mb-[40px] flex text-wtext'>
              {post.frontMatter.categories.map((category: any) => (
                <div key={category}>
                  <Link href={`/categories/${category}`}>
                    <a className='text-wtext'>
                    <p className='mr-[20px] flex h-[30px] items-center justify-center bg-main pr-[30px] pl-[30px]'>
                      {category}
                    </p>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className='text-1xl mb-[4px] lg:text-[20px] 2xl:text-[25px]'>
              {post.frontMatter.title}
            </h1>
            <p className='text-1xl lg:text-[18px] 2xl:text-[20px]'>{post.frontMatter.date}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;