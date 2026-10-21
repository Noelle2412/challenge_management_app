"use server";
import { revalidatePath } from "next/cache";
import type {
  ActionResult,
  Challenge,
  ChallengeInput,
} from "@/types/challenge";

const API_URL = process.env.API_URL ?? "http://localhost:3001";

function refreshPages() {
  revalidatePath("/");
  revalidatePath("/challenges");
}

export async function getChallenges(): Promise<Challenge[]> {
  const res = await fetch(`${API_URL}/challenges`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch challenges (${res.status})`);
  }

  return res.json();
}

export async function getChallengeById(id: string): Promise<Challenge | null> {
  const res = await fetch(`${API_URL}/challenges/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch challenge (${res.status})`);
  }

  return res.json();
}

export async function createChallenge(
  data: ChallengeInput,
): Promise<ActionResult> {
  try {
    const res = await fetch(`${API_URL}/challenges`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        createdAt: new Date().toISOString().slice(0, 10),
      }),
    });

    if (!res.ok) {
      return {
        success: false,
        message: `Failed to create the challenge (status ${res.status}).`,
      };
    }

    refreshPages();
    return { success: true, message: "Challenge created successfully." };
  } catch {
    return {
      success: false,
      message: "Could not reach the server. Is json-server running?",
    };
  }
}

export async function updateChallenge(
  id: string,
  data: ChallengeInput,
): Promise<ActionResult> {
  try {
    const res = await fetch(`${API_URL}/challenges/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        success: false,
        message: `Failed to update the challenge (status ${res.status}).`,
      };
    }
    refreshPages();
    return { success: true, message: "Challenge updated successfully." };
  } catch {
    return {
      success: false,
      message: "Could not reach the server. Is json-server running?",
    };
  }
}

export async function deleteChallenge(id: string): Promise<ActionResult> {
  try {
    const res = await fetch(`${API_URL}/challenges/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return {
        success: false,
        message: `Failed to delete the challenge (status ${res.status}).`,
      };
    }

    refreshPages();
    return { success: true, message: "Challenge deleted successfully." };
  } catch {
    return {
      success: false,
      message: "Could not reach the server. Is json-server running?",
    };
  }
}
