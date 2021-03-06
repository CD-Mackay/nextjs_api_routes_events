import Head from "next/head";
import Notification from "../components/ui/notification";
import { NotificationContextProvider } from "../store/notification-context";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        <Notification title="test" message="testing one two" status="pending" />
      </Layout>
    </NotificationContextProvider>
  );
}

export default MyApp;
