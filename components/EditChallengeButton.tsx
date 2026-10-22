import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import editIcon from "../public/docs/editIcon.svg";

const EditChallengeButton = ({ id }: { id: string }) => {
  return (
    <Link
      href={`/challenges/${id}/edit`}
      aria-label="Edit challenge"
      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "bg-plum")}>
      <Image src={editIcon} alt="" className="w-5" />
    </Link>
  );
};

export default EditChallengeButton;
