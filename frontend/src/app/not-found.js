import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto w-full flex flex-col place-items-center justify-center h-screen text-black gap-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="bg-[#12a3fc] p-3 rounded-lg">
        Return Home
      </Link>
    </div>
  );
}
