import ChallengeForm from "@/components/ChallengeForm";

export default function NewChallengePage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold">New Challenge</h2>
      <ChallengeForm />
    </div>
  );
}
