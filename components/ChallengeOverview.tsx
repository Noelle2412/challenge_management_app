import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { getChallengeById } from "@/actions/challenges";
import EditChallengeButton from "@/components/EditChallengeButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ChallengeLevel } from "@/types/challenge";

const LEVEL_STYLES: Record<ChallengeLevel, string> = {
  Easy: "bg-green-100 text-green-800",
  Moderate: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const ChallengeOverview = async ({ id }: { id: string }) => {
  const challenge = await getChallengeById(id);

  if (!challenge) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Link
            href="/challenges"
            className="text-sm text-gray-500 hover:underline">
            ← Back to all challenges
          </Link>
          <h1 className="text-3xl font-bold">{challenge.title}</h1>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>{challenge.category}</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                LEVEL_STYLES[challenge.level]
              }`}>
              {challenge.level}
            </span>
            <span>Created {challenge.createdAt}</span>
          </div>
        </div>
        <EditChallengeButton id={challenge.id} />
      </div>

      {/* Description (stored as markdown) */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <div className="prose max-w-none">
          <ReactMarkdown>{challenge.description}</ReactMarkdown>
        </div>
      </section>

      {/* Code */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Code{" "}
          <span className="text-sm font-normal text-gray-500">
            ({challenge.code.language})
          </span>
        </h2>
        <p className="text-sm text-gray-600 mb-2">
          Function name:{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5">
            {challenge.code.functionName}
          </code>
        </p>
        <pre className="overflow-x-auto rounded-md bg-gray-900 p-4 text-sm text-gray-100">
          <code>{challenge.code.code}</code>
        </pre>
      </section>

      {/* Tests */}
      <section>
        <h2 className="text-xl font-semibold mb-2">
          Test cases ({challenge.tests.length})
        </h2>
        {challenge.tests.length === 0 ? (
          <p className="text-sm text-gray-500">No test cases defined.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Argument</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Expected output</TableHead>
                <TableHead className="text-right">Weight</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {challenge.tests.map((test, index) => (
                <TableRow key={index}>
                  <TableCell>{test.type}</TableCell>
                  <TableCell className="font-medium">{test.name}</TableCell>
                  <TableCell>
                    <code>{String(test.value)}</code>
                  </TableCell>
                  <TableCell>
                    <code>{test.output}</code>
                  </TableCell>
                  <TableCell className="text-right">{test.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </section>
    </div>
  );
};

export default ChallengeOverview;
