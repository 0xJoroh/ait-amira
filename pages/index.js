import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ait Amira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="this domain for sale" />
        <hr />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
