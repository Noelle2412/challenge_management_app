import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import ChallengesList from "@/components/ChallengesList";

const Dashboard = () => {
  return (
    <>
      <div className="p-8 flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">Your challenges</h2>
        <Button className="bg-plum text-white rounded-sm p-4 w-fit">
          New Challenge
        </Button>
        <ChallengesList />
      </div>
    </>
  );
};

export default Dashboard;
