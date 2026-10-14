import Image from "next/image";
import Counter from "../components/Counter";
import Link from "next/link";
import Products from "./products/page";
import MyImage from "../components/MyImage";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="p-3 flex flex-col flex-1 gap-4 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl my-12">Welcome to my Page!</h1>
      <Products />
      <Counter />
      <MyImage />
      <Link href="/contact"> Contact us </Link>
      <ContactForm />
    </main>
  );
}
