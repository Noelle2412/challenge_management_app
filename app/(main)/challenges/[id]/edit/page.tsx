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

  return <ChallengeForm challenge={challenge} />;
}
