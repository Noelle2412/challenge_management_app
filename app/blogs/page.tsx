import Image from "next/image";
import Counter from "../../components/Counter";
import Link from "next/link";
import BlogsCard from "../../components/BlogsCard";

export default function Blogs() {
  return (
    <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Hi this is a Blog
        </h1>
        <div className="flex items-center justify-center gap-3">
          <BlogsCard />
        </div>
      </div>
      <Counter />
    </main>
  );
}
