import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";


import {
  ArrowLeft,
  ArrowDown,
  LockKeyhole,
  Accessibility,
  Users,
  Layers3,
} from "lucide-react";

import CaseStudyGate from "@/components/case-studies/CaseStudyGate";

export default async function PatientAssistancePortalCaseStudy() {
  const cookieStore = await cookies();

const accessGranted =
  cookieStore.get("pap-case-study-access")?.value === "granted";

if (!accessGranted) {
  return (
    <CaseStudyGate
      title="Patient Assistance Portal"
      description="This case study contains confidential project information. Enter the password to continue."
    />
  );
}

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to portfolio
          </Link>

          <div className="mx-auto max-w-5xl py-24 lg:py-32">

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium">
                Healthcare UX
              </span>

              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium">
                Enterprise Product Design
              </span>

              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium">
                Accessibility
              </span>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Patient Assistance
              <br />
              Portal
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              Redesigning a complex insurance claim experience to make it
              clearer, more accessible, and easier for patients and caregivers
              to navigate.
            </p>

            <div className="mt-12 grid gap-8 border-t border-gray-200 pt-8 sm:grid-cols-3">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  My Role
                </p>
                <p className="mt-2 font-medium">
                  UI/UX Designer
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Users
                </p>
                <p className="mt-2 font-medium">
                  Patients & Caregivers
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Scope
                </p>
                <p className="mt-2 font-medium">
                  End-to-end redesign
                </p>
              </div>

            </div>

          </div>

          <div className="flex justify-center pb-10">
            <ArrowDown
              size={20}
              className="animate-bounce text-gray-400"
            />
          </div>

        </div>
      </section>


      {/* CONFIDENTIALITY */}

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-10">

          <div className="flex gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-gray-700 shadow-sm">
              <LockKeyhole size={22} />
            </div>

            <div>

              <h2 className="text-xl font-semibold">
                A note on confidentiality
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                This project contains confidential client and product
                information. The case study therefore uses unbranded visuals,
                design notes, and process documentation. Branded assets,
                proprietary screens, and the complete production website are
                intentionally excluded.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CHALLENGE */}

      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">

        <SectionLabel number="01" label="The Challenge" />

        <h2 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          The problem wasn't one screen.
          <br />
          It was the entire experience.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <p className="text-lg leading-8 text-gray-600">
            The existing portal had a dated visual language and a confusing
            user experience. Users struggled to understand where to find the
            right forms, what information they needed, and what would happen
            next in the claim process.
          </p>

          <p className="text-lg leading-8 text-gray-600">
            The experience also created accessibility and readability
            challenges. Typography was too thin, navigation was difficult to
            follow, icons lacked consistency, the mobile experience needed
            improvement, and users frequently relied on phone support to
            understand how to use the website.
          </p>

        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            "Confusing navigation",
            "Poor readability",
            "Inconsistent icons",
            "Weak visual hierarchy",
            "Poor mobile experience",
            "High user friction",
            "Accessibility issues",
            "Users couldn't find forms",
            "Heavy reliance on phone support",
          ].map((problem) => (

            <div
              key={problem}
              className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <p className="font-medium text-gray-800">
                {problem}
              </p>
            </div>

          ))}

        </div>

      </section>

      

      {/* new code */}

      <section className="mt-24">
  <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">

    {/* SECTION INTRO */}

    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
        Before & After
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
        From a confusing interface to a clearer experience
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        The existing experience had several usability issues. Navigation was
        difficult to understand, typography lacked readability, icons were
        inconsistent, and important information was easy to miss.
      </p>
    </div>

    {/* BEFORE / AFTER */}

    <div className="mt-12 grid gap-8 lg:grid-cols-2">

      {/* BEFORE */}

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Before
          </h3>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
            Original experience
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
          <Image
            src="/images/pap-old-ui.jpg"
            alt="Anonymized view of the original Patient Assistance Portal interface"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* AFTER */}

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            After
          </h3>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
            Redesigned experience
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
          <Image
            src="/images/pap-new-ui.jpg"
            alt="Anonymized view of the redesigned Patient Assistance Portal interface"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>

  </div>
</section>
      
      {/* end of new code */}

      {/* USERS */}

      <section className="bg-gray-950 text-white">

        <div className="mx-auto max-w-5xl px-6 py-28 lg:px-8">

          <SectionLabel
            number="02"
            label="Designing for the User"
            dark
          />

          <div className="mt-10 grid gap-12 md:grid-cols-2">

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Users size={25} />
              </div>

              <h3 className="mt-7 text-3xl font-semibold">
                Patients & caregivers
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                The portal needed to work for people who may not be familiar
                with insurance terminology or complex digital workflows.
                Clarity and confidence therefore became central design goals.
              </p>

            </div>

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <Accessibility size={25} />
              </div>

              <h3 className="mt-7 text-3xl font-semibold">
                Accessibility wasn't an afterthought
              </h3>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                The redesign focused on readability, stronger hierarchy,
                clearer controls, understandable icons, and a simpler
                navigation structure so users could move through the experience
                with less cognitive effort.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ROLE */}

      <section className="mx-auto max-w-5xl px-6 py-28 lg:px-8">

        <SectionLabel number="03" label="My Role" />

        <h2 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          I owned the redesign from
          <br />
          structure to interface.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          I designed the complete experience, working closely with project
          managers and developers throughout the process. My responsibilities
          covered the user flow, visual design, accessibility, navigation,
          components, content presentation, and responsive experience.
        </p>

        <div className="mt-14 flex flex-wrap gap-3">

          {[
            "UX Design",
            "UI Design",
            "User Flow",
            "Accessibility",
            "Responsive Design",
            "Navigation",
            "Information Design",
            "Design Handoff",
          ].map((item) => (

            <span
              key={item}
              className="rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700"
            >
              {item}
            </span>

          ))}

        </div>

      </section>


      {/* REDESIGN */}

      <section className="border-y border-gray-200 bg-gray-50">

        <div className="mx-auto max-w-5xl px-6 py-28 lg:px-8">

          <SectionLabel number="04" label="The Redesign" />

          <h2 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            I didn't redesign a few screens.
            <br />
            I redesigned the experience.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            The redesign touched almost every major part of the product.
            Instead of treating the visual problems independently, I looked at
            how navigation, content, accessibility, visual hierarchy, and the
            claim journey worked together.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {[
              {
                title: "User Flow",
                text: "Reworked the journey so users could understand what they needed to do and where they were going next.",
              },
              {
                title: "Navigation",
                text: "Restructured navigation to make important forms and actions easier to discover.",
              },
              {
                title: "Readability",
                text: "Updated typography and visual hierarchy to make information easier to scan and understand.",
              },
              {
                title: "Visual Language",
                text: "Created a more consistent system for colors, icons, buttons, spacing, and interface elements.",
              },
              {
                title: "Claim Preparation",
                text: "Added a dedicated page explaining which documents users should keep ready before submitting a claim.",
              },
              {
                title: "Responsive Experience",
                text: "Improved the mobile experience so important information and actions remained clear on smaller screens.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* DOCUMENTS */}

      <section className="mx-auto max-w-5xl px-6 py-28 lg:px-8">

        <SectionLabel number="05" label="A Small Change With a Big UX Purpose" />

        <h2 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          Help users prepare
          <br />
          before they begin.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          One important improvement was introducing a preparation step before
          users entered the main claim experience. Instead of making users
          discover required documentation halfway through the process, the
          redesigned experience tells them what to keep handy before they begin.
        </p>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-12">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
              <Layers3 size={22} />
            </div>

            <div>
              <p className="font-semibold">
                Before starting a claim
              </p>

              <p className="text-sm text-gray-500">
                Make the required documents handy
              </p>
            </div>

          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {[
              "Know what information is required",
              "Have supporting documents available",
              "Understand what happens next",
              "Start the process with confidence",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl bg-white p-5 text-sm font-medium text-gray-700"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ITERATION */}

      <section className="bg-gray-50">

        <div className="mx-auto max-w-5xl px-6 py-28 lg:px-8">

          <SectionLabel number="06" label="Iteration & Collaboration" />

          <h2 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Good design wasn't
            <br />
            created in isolation.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            After creating the first draft, I worked through multiple rounds of
            review with the internal team and project manager. The work was
            then reviewed by the onshore team and client. Feedback from each
            stage informed the next iteration.
          </p>

          <div className="mt-16 grid gap-4 md:grid-cols-5">

            {[
              "Initial Design",
              "Internal Review",
              "Onshore Review",
              "Client Feedback",
              "Iteration & Sign-off",
            ].map((step, index) => (

              <div
                key={step}
                className="relative rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </span>

                <p className="mt-4 font-medium">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* OUTCOME */}

      <section className="mx-auto max-w-5xl px-6 py-28 lg:px-8">

        <SectionLabel number="07" label="Outcome" />

        <h2 className="mt-8 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
          From a fragmented experience
          <br />
          to a clearer product.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <p className="text-lg leading-8 text-gray-600">
            The redesigned experience was reviewed and signed off by the
            project team and stakeholders after multiple rounds of iteration.
          </p>

          <p className="text-lg leading-8 text-gray-600">
            After completion, the client also shared positive feedback and
            appreciation for the redesigned experience.
          </p>

        </div>

        <div className="mt-14 rounded-3xl bg-gray-950 p-8 text-white md:p-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            The result
          </p>

          <p className="mt-6 max-w-3xl text-2xl font-medium leading-10 md:text-3xl">
            A more accessible, consistent, and understandable experience for
            patients and caregivers navigating a complex insurance process.
          </p>

        </div>

      </section>


      {/* NEXT */}

      <section className="border-t border-gray-200">

        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
            Next Case Study
          </p>

          <Link
            href="/"
            className="group mt-6 flex items-center justify-between"
          >

            <h2 className="text-3xl font-bold tracking-tight transition-colors group-hover:text-blue-600 md:text-5xl">
              Back to selected work
            </h2>

            <ArrowLeft
              size={30}
              className="rotate-180 transition-transform duration-300 group-hover:translate-x-2"
            />

          </Link>

        </div>

      </section>

    </main>
  );
}


function SectionLabel({
  number,
  label,
  dark = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] ${
        dark ? "text-gray-400" : "text-gray-400"
      }`}
    >
      <span className={dark ? "text-blue-400" : "text-blue-600"}>
        {number}
      </span>

      <span>{label}</span>
    </div>
  );
}