import { Provider } from 'next-auth/client';
import '../styles/globals.css'
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
  <Provider session={pageProps.session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
);
}

export default MyApp
