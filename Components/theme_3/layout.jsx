import { Hind_Siliguri } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';
import { Notice } from './components/notice/notice';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

const hind_siliguri = Hind_Siliguri({ subsets: ['bengali'], variable: '--font-bn', weight: ['300', '400', '500', '600', '700'] });

export const Layout = ({shopInfo, children }) => {
  useEffect(() => {
    hind_siliguri && document.documentElement.classList.add(hind_siliguri.variable);
  }, []);
  return (
    <main className={hind_siliguri.variable} style={{ backgroundColor: '#f2f3f8' }}>
      <Head>
        <link rel="stylesheet" href="/theme3_global.css" />
      </Head>
      <Notice />
      <Header />
      <div className="ne-overflow-x-hidden">{children}</div>
      <Footer />
    </main>
  );
};
