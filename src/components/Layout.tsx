import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import { ThemeContext } from '../styles/ThemeProvider';
import { useContext } from 'react';
import Header from './Header';

const Layout: NextPage<any> = ({ title, children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ minHeight: '100vh' }} className="page">
      <style global jsx>{`
        .page {
          background: ${theme.background};
          color: ${theme.secondary};
        }
        h1 {
          color: ${theme.primary};
        }
        p {
          color: ${theme.secondary};
        }
        .main {
          margin-left: auto;
          margin-right: auto;
          max-width: 50rem;
          padding: 1.61803399rem 1rem;
        }
      `}</style>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          property="og:title"
          key="title"
        />
        <meta />
      </Head>

      <div className="main">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
