"use client";
import Head from "next/head";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import { BsLinkedin as LinkedInLogo } from "react-icons/bs";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Hello!"],
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white text-black">
      <Head>
        <title>Goutham Ananda | Portfolio</title>
        <meta
          name="description"
          content="An introduction page for an aerospace professional"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="mt-8">
          <h1 className="text-3xl">{text}</h1>
          <h2 className="text-2xl font-semibold">Goutham Ananda</h2>
          <p className="text-xl">Aerospace Stress Engineer</p>
          <p> Connect with me on </p>

          <div className="flex justify-center text-3xl">
            <LinkedInLogo />
          </div>
        </div>
      </main>
    </div>
  );
}
