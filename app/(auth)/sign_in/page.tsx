"use client";
import { ErrorMessage } from "../../../components/ErrorMessage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signInSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-[#8053FF] text-2xl py-8"> Join Coders Now!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-4 w-full px-8">
        <Input
          className="bg-[#23155B] px-4 py-6 w-full border-0 text-white"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        <ErrorMessage message={errors.email?.message} />

        <Input
          className="bg-[#23155B] px-4 py-6 w-full border-0 text-white"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <ErrorMessage message={errors.password?.message} />

        <Button
          type="submit"
          className="bg-[#3B82F7] rounded-lg px-4 py-6 w-full border-0 text-white">
          Sign In
        </Button>
      </form>
      <p className="text-sm">
        New to CLA?{" "}
        <Link href="/sign_up" className="text-[#3B82F7]">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default SignIn;
