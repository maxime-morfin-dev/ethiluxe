import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/_navigation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ethiluxe</title>
        <meta name="description" content="Site web Ethiluxe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
      </main>
    </div>
  );
};

export default Home;
