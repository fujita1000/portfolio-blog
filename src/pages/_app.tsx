import 'tailwindcss/tailwind.css';
import "../styles/index.css"
import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import SEO from "../../next-seo.config";

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;