import Image from 'next/image';
import Link from 'next/link';
import { post } from '../../utils/types';
import styles from "./PostCard.module.scss"

const PostCard = ({ post }: post) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a>
        <div className={styles.container}>
          
        <div>
          <Image
            src={`/${post.frontMatter.image}`}
            width={200}
            height={200}
            alt={post.frontMatter.title}
          />
        </div>
        <div>
          <h1>{post.frontMatter.title}</h1>
          <span>{post.frontMatter.date}</span>
        </div>

        </div>
      </a>
    </Link>
  );
};

export default PostCard;