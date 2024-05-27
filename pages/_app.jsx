import Layout from '@/layouts/Layout';
import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
