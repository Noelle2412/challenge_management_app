// components/ChallengesList.tsx
import { getChallenges } from "@/actions/challenges";
import { Button } from "./ui/button";
import editIcon from "../public/docs/editIcon.svg";
import deleteIcon from "../public/docs/recycle-bin-icon.svg";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ChallengesList = async () => {
  const challenges = await getChallenges();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Difficulty</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {challenges.map((challenge) => (
          <TableRow key={challenge.id}>
            <TableCell className="font-medium">{challenge.title}</TableCell>
            <TableCell>{challenge.category}</TableCell>
            <TableCell>{challenge.level}</TableCell>
            <TableCell>{challenge.createdAt}</TableCell>
            <TableCell>
              <Button className="bg-indigo-500">
                {" "}
                <Image src={editIcon} alt="Edit" />
              </Button>
              <Button className="bg-red-500">
                {" "}
                <Image src={deleteIcon} alt="Delete" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>Your challenges list</TableCaption>
    </Table>
  );
};

export default ChallengesList;
