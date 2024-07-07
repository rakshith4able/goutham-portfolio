"use client";
import Head from "next/head";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
import { SiGmail as EmailIcon } from "react-icons/si";
import { HomeHandlers } from "./utils/handlers";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Goutham Ananda", "an Aerospace Stress Analyst"],
    typeSpeed: 100,
    loop: true,
  });
  return (
    <div className="flex flex-col items-center justify-center  bg-small-image lg:bg-large-image md:bg-medium-image bg-cover bg-center text-white h-screen overflow-hidden">
      <Head>
        <title>Goutham Ananda | Portfolio</title>
        <meta
          name="description"
          content="An introduction page for an aerospace professional"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="assets/icons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="assets/icons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="assets/icons/android-chrome-512x512.png"
        />
      </Head>

      <main className="lg:relative w-full h-full py-5 px-5 md:py-20 md:px-10 lg:py-40 lg:px-40">
        <div className="absolute inset-0  bg-black opacity-60 w-full"></div>
        <h1 className="relative text-3xl md:text-5xl text-start self-start w-full z-10">
          G-A
        </h1>
        <div className="relative h-full grid grid-cols-1 grid-rows-[40%_60%] md:grid-cols-1 lg:grid-cols-[75%_25%] justify-center items-center z-10">
          <div className="h-full flex flex-col gap-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-semibold text-cyan-400">
              Hello!
            </h2>
            <p className="text-lg md:text-4xl font-normal">
              I am <span className="font-semibold">{text}</span>
              <Cursor />
            </p>

            <p className="text-sm md:text-2xl">
              Welcome to my page ! This is a work in progress and will be
              updating shortly. Until then
            </p>
            <p className="text-lg md:text-2xl uppercase font-thin">
              Get in touch with
            </p>
            <div className="text-3xl md:text-4xl flex gap-5">
              <LinkedInIcon
                className="cursor-pointer text-white"
                onClick={HomeHandlers.handleRedirect(
                  "website",
                  "https://www.linkedin.com/in/gouthamananda/"
                )}
              />
              <EmailIcon
                className="cursor-pointer text-white"
                onClick={HomeHandlers.handleRedirect(
                  "email",
                  "gouthamkaustuba@gmail.com"
                )}
              />
            </div>
          </div>
          <div className="flex flex-col items-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-700 bg-opacity-25"></div>
              <img
                className="w-32 h-32 md:w-44 md:h-44 lg:w-44 lg:h-44 rounded-full border-4 border-cyan-400"
                src="/assets/img/profile_pic.jpeg"
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
