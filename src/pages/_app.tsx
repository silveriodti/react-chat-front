import type { AppProps /*, AppContext */ } from 'next/app';
import Layout from '../components/Layout';
import ThemeProvider from '../styles/ThemeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout title={pageProps.title || 'React Daily Chat'}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
