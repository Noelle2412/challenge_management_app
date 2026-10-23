"use client";
import { ErrorMessage } from "../../../components/ErrorMessage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpData) => {
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
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        <ErrorMessage message={errors.firstName?.message} />

        <Input
          className="bg-[#23155B] px-4 py-6 w-full border-0 text-white"
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        />
        <ErrorMessage message={errors.lastName?.message} />

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
          Sign up
        </Button>
      </form>
      <p className="text-sm">
        Already have an account?:{" "}
        <Link to="/sign_in" className="text-[#3B82F7]">
          Login
        </Link>
      </p>
    </>
  );
};

export default SignUp;
