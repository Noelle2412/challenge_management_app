import { notFound } from "next/navigation";
import ChallengeForm from "@/components/ChallengeForm";
import { getChallengeById } from "@/actions/challenges";

export default async function EditChallengePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const challenge = await getChallengeById(id);

  if (!challenge) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl my-4">Edit Challenge</h2>
      <ChallengeForm challenge={challenge} />
    </div>
  );
}
