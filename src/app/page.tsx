"use client";
import Head from "next/head";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
import { SiGmail as EmailIcon } from "react-icons/si";
import { HomeHandlers } from "./utils/handlers";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Goutham Ananda", "an Aerospace Stress Engineer"],
    typeSpeed: 100,
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-small-image lg:bg-large-image md:bg-medium-image bg-cover bg-center text-white">
      <Head>
        <title>Goutham Ananda | Portfolio</title>
        <meta
          name="description"
          content="An introduction page for an aerospace professional"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative container md:px-40 md:py-32 h-full">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <h1 className="relative text-3xl text-start self-start w-full z-10">
          G-A
        </h1>
        <div className="relative h-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[60%_40%] justify-center items-center z-10">
          <div className="h-full flex flex-col justify-evenly order-2 lg:order-1">
            <h2 className="text-6xl font-semibold text-cyan-400">Hello!</h2>
            <p className="text-3xl font-normal">
              I am <span className="font-semibold">{text}</span>
              <Cursor />
            </p>

            <p className="text-xl">
              Welcome to my page ! This is a work in progress and will be
              updating shortly
            </p>
            <p className="text-lg uppercase font-thin">Connect On</p>
            <div className="text-3xl flex gap-5">
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
                className="w-60 h-60 rounded-full border-4 border-cyan-400"
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
