
import Image from 'next/image';
import Link from 'next/link';
import { post } from '../utils/types';

const SintyakuCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className='mt-[10px] pb-8'>
        <div className='relative h-[200px] w-[350px] md:h-[281px] md:w-full xl:h-[225px] xl:w-full'>
          <Image
            src={`/${post.frontMatter.image}`}
            layout='fill'
            priority={true}
            objectFit='contain'
            alt={post.frontMatter.title}
          />
          <div className='absolute top-[10px]  left-[10px] mb-[40px] flex text-wtext mt-[20px]'>
            {post.frontMatter.categories.map((category: any) => (
              <div key={category} className='border-[2px] border-solid border-yellow-300 mr-[20px]'>
                <Link href={`/categories/${category}`}>
                  <a className='text-wtext'>
                    <p className='flex h-[30px] items-center justify-center bg-main pr-[15px] pl-[15px]'>
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
    </Link>
  );
};

export default SintyakuCard;
