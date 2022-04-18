import { Provider } from 'next-auth/client';
import '../styles/globals.css'
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
import Layout from '../components/layout/Layout';
import { BookmarksContextProvider } from "../store/BookmarksContext";


function MyApp({ Component, pageProps }) {
  return (
<Provider session={pageProps.session}>
    <BookmarksContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookmarksContextProvider>
</Provider>
);
}

export default MyApp
