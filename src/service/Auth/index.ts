"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const registerUser = async (userData: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/user/create-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (err: any) {
    return { success: false, message: err.message || "Registration failed" };
  }
};
export const loginUser = async (userData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();
    if (result.success) {
      (await cookies()).set("accessToken", result?.data?.accessToken);
    }
    return result;
  } catch (err: any) {
    return { success: false, message: err.message || "Login failed" };
  }
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  let decoded;
  if (accessToken) {
    decoded = jwtDecode(accessToken);
    return decoded;
  } else {
    return null;
  }
};
