import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppProvider } from "../components/context";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
