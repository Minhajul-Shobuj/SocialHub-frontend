/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

const cookieStore = await cookies();
const token = cookieStore.get("accessToken")?.value;

export const getMe = async () => {
  try {
    if (!token) {
      throw new Error("Access token not found");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/getMe`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch feed: ${res.statusText}`);
    }

    const result = await res.json();
    return result;
  } catch (err: any) {
    console.error("getMyFeed error:", err.message);
    return { error: true, message: err.message };
  }
};

export const getMyPost = async () => {
  try {
    if (!token) {
      throw new Error("Access token not found");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch feed: ${res.statusText}`);
    }

    const result = await res.json();
    return result;
  } catch (err: any) {
    console.error("getMyFeed error:", err.message);
    return { error: true, message: err.message };
  }
};
