export type Challenge = {
  id: string;
  title: string;
  category: string;
  description: string;
  level: ChallengeLevel;
  code: {
    functionName: string;
    language: "js" | "py";
    code: string;
  };
  tests: ChallengeTest[];
  createdAt: string;
};

export type ChallengeInput = Omit<Challenge, "id" | "createdAt">;

export type ChallengeLevel = "Easy" | "Moderate" | "Hard";

export type ChallengeTest = {
  type: TestCaseType;
  name: string;
  value: string | number;
  output: string;
  weight: number;
};

export type TestCaseType = "number" | "string";

export type ActionResult = {
  success: boolean;
  message: string;
};
