"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole } from "lucide-react";

type CaseStudyGateProps = {
  password: string;
  title?: string;
  description?: string;
};

export default function CaseStudyGate({
  password,
  title = "Private Case Study",
  description = "This case study contains confidential project information. Enter the password to continue.",
}: CaseStudyGateProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (value === password) {
      document.cookie =
        "case-study-access=granted; path=/; max-age=3600; SameSite=Lax";

      window.location.reload();
      return;
    }

    setError("Incorrect password. Please try again.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md">

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
              htmlFor="password"
              className="text-sm font-medium text-gray-900"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
                setError("");
              }}
              placeholder="Enter password"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
            />

            {error && (
              <p className="mt-3 text-sm text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3.5 font-medium text-white transition hover:bg-gray-700"
            >
              View Case Study
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}