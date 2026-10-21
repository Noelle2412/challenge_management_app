import Link from "next/link";
import { Button } from "@/components/ui/button";
import editIcon from "../public/docs/editIcon.svg";
import Image from "next/image";

const EditChallengeButton = ({ id }: { id: string }) => {
  return (
    <Button variant="outline" size="sm" className=" bg-plum">
      <Link href={`/challenges/${id}/edit`}>
        <Image src={editIcon} alt="Edit" className="w-5" />
      </Link>
    </Button>
  );
};

export default EditChallengeButton;
