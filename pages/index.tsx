import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ethiluxe</title>
        <meta name="description" content="Site web Ethiluxe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-brixton">Hello world</div>
    </div>
  );
};

export default Home;
