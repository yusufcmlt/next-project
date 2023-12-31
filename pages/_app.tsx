import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Head>
        <title>Mobil Shop</title>
        <meta name="description" content="E ticaret denemesi" />
      </Head>
      <Navbar
        onSearch={(searchVal) => {
          setSearchText(searchVal);
        }}
      />
      <div className="page-layout">
        <Component {...pageProps} searchText={searchText} />
      </div>
    </>
  );
}
