import ChallengesList from "@/components/ChallengesList";
import CreateChallengeButton from "@/components/CreateChallengeButton";

const Dashboard = () => {
  return (
    <>
      <div className="p-8 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Your challenges</h2>
        <CreateChallengeButton />
        <ChallengesList />
      </div>
    </>
  );
};

export default Dashboard;
