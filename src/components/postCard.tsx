import Image from 'next/image';
import Link from 'next/link';
import { post } from '../utils/types';

const PostCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className='h-100 m-2 w-60'>
          <div>
            <Image
              src={`/${post.frontMatter.image}`}
              width={600}
              height={400}
              alt={post.frontMatter.title}
            />
          </div>
          <div>
            <h1>{post.frontMatter.title}</h1>
            <span>{post.frontMatter.date}</span>
            <span className=' line-clamp-3'>
              {post.frontMatter.description}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;