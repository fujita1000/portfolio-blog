import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import "../styles/index.css"
import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import * as gtag from '../../lib/gtag';
import SEO from "../../next-seo.config";
import Layout from '@/components/Layout';



function MyApp({ Component, pageProps}: AppProps) {
  

 const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url:string) => {
      // @ts-ignore
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXX'
      ></Script>

      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SR7YWZ8036', {
          page_path: window.location.pathname,
          });
          `,
        }}
      />
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