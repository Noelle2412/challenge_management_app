import type { Challenge, ChallengeInput } from "@/types/challenge";
import dotenv from "dotenv";
dotenv.config();

const API_URL = process.env.API_URL;

export async function getChallenges(): Promise<Challenge[]> {
  const res = await fetch(`${API_URL}/challenges`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch challenges (${res.status})`);
  }

  return res.json();
}

export async function createChallenge(
  data: ChallengeInput,
): Promise<Challenge> {
  const res = await fetch(`${API_URL}/challenges`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      createdAt: new Date().toISOString().slice(0, 10),
    }),
  });
  if (!res.ok) {
    throw new Error(`Failed to create challenge (${res.status})`);
  }
  return res.json();
}

export async function updateChallenge(
  id: string,
  data: ChallengeInput,
): Promise<Challenge> {
  const res = await fetch(`${API_URL}/challenges/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Failed to update challenge (${res.status})`);
  }
  return res.json();
}
