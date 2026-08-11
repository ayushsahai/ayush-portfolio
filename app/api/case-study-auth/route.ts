import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password, cookieName } = await request.json();

    if (!password || !cookieName) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 }
      );
    }

    const passwords: Record<string, string | undefined> = {
      "case-study-access": process.env.CASE_STUDY_PASSWORD,
      "design-system-access": process.env.DESIGN_SYSTEM_PASSWORD,
      "mobile-app-case-study-access":
        process.env.MOBILE_APP_CASE_STUDY_PASSWORD,
    };

    const correctPassword = passwords[cookieName];

    if (!correctPassword || password !== correctPassword) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({ success: true });

    response.cookies.set(cookieName, "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}