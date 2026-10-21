import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <h1 className="text-4xl my-12">Are you ready to get challenged? </h1>
      <Link href="/challenges">
        <h2 className="text-2xl my-4 text-plum">Check out our challenges </h2>
      </Link>
    </div>
  );
}
