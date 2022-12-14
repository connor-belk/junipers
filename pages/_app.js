import Head from "next/head";
import Logolink from "../components/Logolink";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Junipers Guinea Pigs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-dark.png" />
      </Head>
      <Logolink />
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
