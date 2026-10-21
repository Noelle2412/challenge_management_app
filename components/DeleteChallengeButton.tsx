"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { deleteChallenge } from "@/actions/challenges";
import deleteIcon from "../public/docs/recycle-bin-icon.svg";
import Image from "next/image";

const DeleteChallengeButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const result = await deleteChallenge(id);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <Button
      variant="destructive"
      size="sm"
      onClick={handleDelete}
      className=" bg-red-500">
      <Image src={deleteIcon} alt="Delete" className="w-5" />
    </Button>
  );
};

export default DeleteChallengeButton;
