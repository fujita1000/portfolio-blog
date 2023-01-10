import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import "../styles/index.css"
import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React from 'react';
import SEO from "../../next-seo.config";
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps}: AppProps) {
const router = useRouter();

  return (
    <>
      <main className='main'>
        <motion.div
          key={router.route}
          initial='initial'
          animate='animate'
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
          }}
        >
          <Layout>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </main>
    </>
  );
}

export default MyApp;