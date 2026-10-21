import ChallengeOverview from "@/components/ChallengeOverview";

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ChallengeOverview id={id} />;
}
