// components/ChallengesList.tsx
import { getChallenges } from "@/actions/challenges";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import DeleteChallengeButton from "@/components/DeleteChallengeButton";
import EditChallengeButton from "@/components/EditChallengeButton";

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
            <TableCell className="font-medium">
              <Link href={`/challenges/${challenge.id}`}>
                {challenge.title}
              </Link>
            </TableCell>
            <TableCell>{challenge.category}</TableCell>
            <TableCell>{challenge.level}</TableCell>
            <TableCell>{challenge.createdAt}</TableCell>
            <TableCell>
              <EditChallengeButton id={challenge.id} />
              <DeleteChallengeButton id={challenge.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableCaption>Your challenges list</TableCaption>
    </Table>
  );
};

export default ChallengesList;
