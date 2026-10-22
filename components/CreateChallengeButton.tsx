import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CreateChallengeButton = () => {
  return (
    <Link
      href="/challenges/new"
      className={cn(buttonVariants(), "bg-plum text-white p-2 rounded-sm w-fit")}>
      Create challenge
    </Link>
  );
};

export default CreateChallengeButton;
