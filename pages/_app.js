import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { Header } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Head>
        <title>Framer Magic</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest"></link>

        <meta
          name="description"
          content="Next Js App Built with Framer Motion"
        />

        <meta itemprop="name" content="Framer Magic" />
        <meta
          itemprop="description"
          content="Next Js App Built with Framer Motion"
        />
        <meta itemprop="image" content="Next Js App Built with Framer Motion" />

        <meta property="og:url" content="https://framer-magic.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Framer Magic" />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content="Next Js App Built with Framer Motion"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Framer Magic" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="Next Js App Built with Framer Motion"
        ></meta>
      </Head>
      <AnimatePresence>
        {" "}
        <Header isOpen={isOpen} toggle={toggle} />
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
