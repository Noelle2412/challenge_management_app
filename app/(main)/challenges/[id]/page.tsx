import ChallengeOverview from "@/components/ChallengeOverview";

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h2 className="text-2xl my-4">Challenge Details</h2>
      <ChallengeOverview id={id} />
    </>
  );
}
