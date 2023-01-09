import fs from 'fs';
import matter from 'gray-matter';
import { toc } from 'mdast-util-toc';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { createElement, Fragment } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import remarkUnwrapImages from 'remark-unwrap-images';
import { unified } from 'unified';
import Profile from "../../components/Profile";
import SintyakuCard from "../../components/SintyakuCard";
import { params } from '../../utils/types';
import { SINTYAKU_LIMIT } from '../api/SintyakuLimit';




const getToc = (options: any) => {
  return (node: any) => {
    const result = toc(node, options);
    node.children = [result.map];
  };
};

export async function getStaticProps({ params }: params) {
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

    const slicedPosts = sortedPosts.slice(
      SINTYAKU_LIMIT * (1 - 1),
      SINTYAKU_LIMIT * 1,
    );

  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);

const result = await unified()
  .use(remarkParse)
  .use(remarkToc, {
    heading: '目次',
  })
  .use(remarkUnwrapImages)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeStringify)
  .process(content);

const toc = await unified()
  .use(remarkParse)
  .use(getToc, {
    heading: '目次',
    tight: true,
  })
  
  // @ts-ignore
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(content);

  return {
    props: {
      posts: slicedPosts,
      frontMatter: data,
      content: result.toString(),
      toc: toc.toString(),
    },
  };
  
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
const toReactNode = (content :params) => {
  return unified()
    .use(rehypeParse, {
      fragment: true,
    })
    .use(rehypeReact, {
      createElement,
      Fragment,
      components: {
        a: MyLink,
        img: MyImage,
      },
    })
    .processSync(content).result;
};

const MyImage = ({ src, alt }: any) => {
  return <Image src={src} alt={alt} width={840} height={473} />;
};

function MyLink({ children, href }: any) {
  if (href === '') href = '/';
  return href.startsWith('/') || href.startsWith('#') ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
}

const Post = ({ frontMatter, content, slug, toc , posts}: params) => {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          type: 'website',
          url: `http:localhost:3000/posts/${slug}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://localhost:3000/${frontMatter.image}`,
              width: 1200,
              height: 700,
              alt: frontMatter.title,
            },
          ],
        }}
      />

      <div className=' bg-sub xl:pb-[100px]'>
        <div className='m-auto w-[350px] pt-[30px] md:w-[550px] xl:flex xl:w-[1100px]'>
          <div className=' xl:mr-[50px] xl:w-[900px]'>
            <h1 className='mb-[30px] pt-[20px] text-2xl xl:mb-[50px] xl:text-3xl'>
              {frontMatter.title}
            </h1>
            <div className='relative m-auto h-[211px] w-[350px] md:mb-[30px] md:h-[309px] md:w-full xl:h-[450px] xl:w-full'>
              <Image src={`/${frontMatter.image}`} layout='fill' alt={frontMatter.title} />
            </div>
            <p className='text-1xl mt-4'>{frontMatter.date}</p>
            <div className='  mt-[10px] flex  text-wtext '>
              {frontMatter.categories.map((category: any) => (
                <p
                  key={category}
                  className='mr-[20px] flex h-[30px] items-center justify-center rounded-2xl bg-main pr-[30px] pl-[30px]'
                >
                  <Link href={`/categories/${category}`}>
                    <a className='text-wtext'>{category}</a>
                  </Link>
                </p>
              ))}
            </div>
            <div>
              <div className=' mt-10 w-[350px] prose-h4:mt-10 prose-h4:text-[25px] prose-p:pt-[10px] prose-li:ml-[30px]  prose-li:list-disc  prose-li:text-[20px] prose-li:underline md:w-full [&>h2]:mt-10  [&>h2]:text-[25px] 2xl:[&>h2]:text-[30px] 2xl:[&>h4]:text-[30px] [&>h3]:mt-10 [&>h3]:text-[25px]  2xl:[&>h3]:text-[30px]  [&>img]:my-10 [&>ul]:ml-[30px] [&>p]:my-[10px] [&>p]:text-[16px] 2xl:[&>p]:text-[20px]'>
                {toReactNode(content)}
              </div>
            </div>
          </div>

          <div className='mt-[140px] xl:ml-[20px] xl:w-[400px]'>
            <div className='h-[478px]'>
              <Profile />
            </div>

            <div className='mt-14 pb-[50px]'>
              <h3 className='text-3xl '>新着記事</h3>
              {posts.map((post: any) => (
                <SintyakuCard key={post.slug} post={post} />
              ))}
            </div>
            <div className='prose sticky top-[50px] m-auto mt-[40px]  hidden w-[325px] xl:block'>
              <div className='h-full w-full rounded-[30px] border-4 border-main'>
                <p className='text-center text-3xl '>目次</p>
                <div dangerouslySetInnerHTML={{ __html: toc }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
