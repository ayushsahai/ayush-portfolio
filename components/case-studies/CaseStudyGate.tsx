"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole } from "lucide-react";

type CaseStudyGateProps = {
  password?: string;
  cookieName?: string;
  title?: string;
  description?: string;
};

export default function CaseStudyGate({
  password,
  cookieName = "case-study-access",
  title = "Private Case Study",
  description = "This case study contains confidential project information. Enter the password to continue.",
}: CaseStudyGateProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!value.trim()) {
      setError("Please enter the password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/case-study-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: value,
          caseStudy: "mobile-app-design",
          expectedPassword: password,
          cookieName,
        }),
      });

      if (!response.ok) {
        setError("Incorrect password. Please try again.");
        setLoading(false);
        return;
      }

      window.location.reload();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white">
            <LockKeyhole size={24} />
          </div>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            {description}
          </p>

          <form onSubmit={handleSubmit} className="mt-8">

            <label
              htmlFor="case-study-password"
              className="text-sm font-medium text-gray-900"
            >
              Password
            </label>

            <input
              id="case-study-password"
              type="password"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                setError("");
              }}
              placeholder="Enter password"
              autoComplete="off"
              disabled={loading}
              className="
                mt-2
                w-full
                rounded-xl
                border
                border-gray-300
                bg-white
                px-4
                py-3
                text-gray-900
                outline-none
                transition
                focus:border-gray-900
                focus:ring-2
                focus:ring-gray-900/10
                disabled:opacity-50
              "
            />

            {error && (
              <p
                role="alert"
                className="mt-3 text-sm font-medium text-red-600"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                mt-6
                w-full
                rounded-xl
                bg-gray-900
                px-5
                py-3.5
                font-medium
                text-white
                transition
                hover:bg-gray-700
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? "Checking..." : "View Case Study"}
            </button>

          </form>

        </div>
      </div>
    </main>
  );
}