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
import { unified } from 'unified';
import Profile from "../../components/Profile";
import { params } from '../../utils/types';

const getToc = (options: any) => {
  return (node: any) => {
    const result = toc(node, options);
    node.children = [result.map];
  };
};

export async function getStaticProps({ params }: params) {

  const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(file);

const result = await unified()
  .use(remarkParse)
  .use(remarkToc, {
    heading: '目次',
  })
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

  
  return { props: { frontMatter: data, content: result.toString(), toc: toc.toString() } };
  
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
  return <Image src={src} alt={alt} width='400' height='400' />;
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

const Post = ({ frontMatter, content, slug, toc }: params) => {
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
      <div className='bg-sub'>
        <div className='m-auto flex w-[1200px]'>
          <div>
            <div className='relative mt-20 h-[478px] w-[850px]'>
              <Image src={`/${frontMatter.image}`} layout='fill' alt={frontMatter.title} />
            </div>
            <h1>{frontMatter.title}</h1>
            <span>{frontMatter.date}</span>
            <div>
              {frontMatter.categories.map((category: any) => (
                <span key={category}>
                  <Link href={`/categories/${category}`}>
                    <a>{category}</a>
                  </Link>
                </span>
              ))}
            </div>
            {toReactNode(content)}
          </div>

          <div className='ml-8 mt-20 w-[325px]'>
            <div className='h-[478px]'>
              <Profile />
            </div>

            <div className='sticky top-[50px] mt-10 w-[325px]'>
              <div dangerouslySetInnerHTML={{ __html: toc }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
