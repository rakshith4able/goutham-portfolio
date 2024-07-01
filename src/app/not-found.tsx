import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-evenly items-center h-screen bg-white text-black">
      <div className="flex flex-col justify-evenly items-center h-1/4">
        <h2 className="text-5xl">Not Found</h2>
        <p className="text-base">Could not find requested resource</p>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
