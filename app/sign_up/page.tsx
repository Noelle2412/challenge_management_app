"use client";
import SignFrame from "@/components/SignFrame";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  return (
    <SignFrame>
      <h1 className="text-[#8053FF] text-2xl py-8"> Join Coders Now!</h1>
      <form action="" className="flex flex-col gap-4 w-full px-8">
        <Input
          className="bg-[#23155B] px-4 py-6 w-full border-0"
          type="text"
          name="first_name"
          placeholder="First Name"
        />
        <Input
          className="bg-[#23155B] px-4 py-6 w-full border-0"
          type="text"
          name="last_name"
          placeholder="Last Name"
        />
        <Input
          className="bg-[#23155B] px-4 py-6 w-full border-0"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          className="bg-[#23155B] px-4 py-6 w-full border-0"
          type="password"
          name="password"
          placeholder="Password"
        />
        <Button
          className="bg-[#3B82F7] rounded-lg px-4 py-6 w-full border-0 text-white"
          onClick={() => {}}>
          Sign up
        </Button>
      </form>
      <p className="text-sm">
        Already have an account?:{" "}
        <Link href="/sign_in" className="text-[#3B82F7]">
          Login
        </Link>
      </p>
    </SignFrame>
  );
};

export default SignUp;
