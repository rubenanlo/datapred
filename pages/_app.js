import Head from "next/head";
import "styles/globals.css";
import RootProviders from "providers/rootProviders";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RootProviders>
        <Component {...pageProps} />
      </RootProviders>
    </>
  );
};

export default App;
