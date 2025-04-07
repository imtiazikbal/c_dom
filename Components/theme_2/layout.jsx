import { Hind_Siliguri } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';
import { Notice } from './components/notice/notice';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

const hind_siliguri = Hind_Siliguri({ subsets: ['bengali'], variable: '--font-bn', weight: ['300', '400', '500', '600', '700'] });

export const Layout = ({ domainInfo, categories, children }) => {
  useEffect(() => {
    hind_siliguri && document.documentElement.classList.add(hind_siliguri.variable);
  }, []);
  // console.log(domainInfo);
  return (
    <main className={hind_siliguri.variable}>
      <Head>
        <link rel="stylesheet" href="/theme2_global.css" precedence="default" />
      </Head>
      <Notice domainInfo={domainInfo} />
      <Header domainInfo={domainInfo} categories={categories} />
      {children}
      <Footer domainInfo={domainInfo} />
    </main>
  );
};
