"use client";
import Head from "next/head";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
import { SiGmail as EmailIcon } from "react-icons/si";
import { HomeHandlers } from "./utils/handlers";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Goutham Ananda"],
    typeSpeed: 100,
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-white text-black">
      <Head>
        <title>Goutham Ananda | Portfolio</title>
        <meta
          name="description"
          content="An introduction page for an aerospace professional"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-10 md:px-40 py-10 md:py-20 h-full">
        <div className="h-full grid grid-rows-1 grid-cols-2 justify-center items-center">
          <div className="h-full flex flex-col py-5 justify-evenly">
            <h1 className="text-3xl text-start self-start w-full">G-A</h1>
            <h2 className="text-6xl font-semibold">Hello!</h2>
            <p className="text-5xl font-normal">
              I am <span className="font-semibold">{text}</span>
            </p>

            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              iure harum iste unde aperiam cupiditate, fugiat ipsam, ab natus
              impedit enim nostrum assumenda, omnis maxime voluptatum? Cumque
              laboriosam quos perferendis.
            </p>
            <p className="text-lg uppercase font-thin"> Connect On</p>
            <div className=" text-3xl flex gap-5">
              <LinkedInIcon
                className="cursor-pointer"
                onClick={HomeHandlers.handleRedirect(
                  "website",
                  "https://www.linkedin.com/in/gouthamananda/"
                )}
              />
              <EmailIcon className="cursor-pointer"  onClick={HomeHandlers.handleRedirect(
                  "email",
                  "gouthamkaustuba@gmail.com"
                )} />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-60 h-60 rounded-full"
              src="/assets/img/profile_pic.jpeg"
              alt="Rounded avatar"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
