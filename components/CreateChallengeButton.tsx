import Link from "next/link";
import { Button } from "@/components/ui/button";

const CreateChallengeButton = () => {
  return (
    <Button className="bg-plum text-white p-2 pt-3 rounded-sm w-fit">
      <Link href="/challenges/new">Create challenge</Link>
    </Button>
  );
};

export default CreateChallengeButton;
