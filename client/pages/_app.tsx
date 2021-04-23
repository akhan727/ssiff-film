import '../scss/styles.scss';
import buildClient from '../api/build-client';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AxiosInstance } from 'axios';

interface Props extends AppProps {
  currentUser: CurrentUser | null;
}

const AppComponent = ({ Component, pageProps, currentUser }: Props) => {
  return (
    <div>
      <Layout currentUser={currentUser} />
      <div className="container">
        <Component currentUser={currentUser} {...pageProps} />
      </div>
    </div>
  );
};

AppComponent.getInitialProps = async (appContext: { ctx: { req: any; }; Component: { getInitialProps: (arg0: any, arg1: AxiosInstance, arg2: any) => {} | PromiseLike<{}>; }; }) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;

/*
import '../scss/styles.scss';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
*/