import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex flex-col place-items-center justify-center h-screen text-white gap-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="bg-green-900 p-3 rounded-lg">
        Return Home
      </Link>
    </div>
  );
}
