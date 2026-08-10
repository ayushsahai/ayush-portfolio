import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const submittedPassword = body?.password;
    const correctPassword = process.env.CASE_STUDY_PASSWORD;

    if (!correctPassword) {
      console.error("CASE_STUDY_PASSWORD is not configured.");
      return NextResponse.json(
        { error: "Case study password is not configured." },
        { status: 500 }
      );
    }

    if (
      typeof submittedPassword !== "string" ||
      submittedPassword !== correctPassword
    ) {
      return NextResponse.json(
        { error: "Incorrect password." },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set({
      name: "pap-case-study-access",
      value: "granted",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}