
import Image from 'next/image';
import Link from 'next/link';
import { post } from '../utils/types';

const SintyakuCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className='mt-[10px] pb-8'>
          <div className='relative h-[200px] w-[350px] md:h-[281px] md:w-full xl:h-[225px] xl:w-full'>
            <Image src={`/${post.frontMatter.image}`} layout='fill' alt={post.frontMatter.title} />
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
          <div className='mt-[20px] md:w-full'>
            <h1>{post.frontMatter.title}</h1>
            <p>{post.frontMatter.date}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SintyakuCard;
