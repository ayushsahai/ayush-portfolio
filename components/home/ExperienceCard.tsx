"use client";

import { ChevronDown } from "lucide-react";

type ExperienceCardProps = {
  item: {
    id: string;
    company: string;
    role: string;
    duration: string;
    icon: React.ElementType;
    summary: string;
    responsibilities: string[];
    products: string[];
    clients: string[];
    impact: string[];
  };
  isOpen: boolean;
  onToggle: () => void;
};

export default function ExperienceCard({
  item,
  isOpen,
  onToggle,
}: ExperienceCardProps) {
  const Icon = item.icon;

  return (
    <div
      className={`
      group
      overflow-hidden
      rounded-3xl
      border
      bg-white
      transition-all
      duration-500
      ${
        isOpen
          ? "border-blue-500 shadow-2xl shadow-blue-100/40"
          : "border-gray-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
      }
      `}
    >
      {/* HEADER */}

      <button
        onClick={onToggle}
        className="w-full text-left p-8"
      >
        <div className="flex items-start justify-between">

          <div className="flex gap-6">

            {/* ICON */}

            <div
              className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              transition-all
              duration-500
              ${
                isOpen
                  ? "bg-blue-600 text-white"
                  : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6"
              }
              `}
            >
              <Icon size={28} />
            </div>

            {/* CONTENT */}

            <div>

              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-blue-600">
                {item.duration}
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight">
                {item.company}
              </h3>

              <p className="mt-1 text-lg font-medium text-gray-500">
                {item.role}
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                {item.summary}
              </p>

            </div>

          </div>

          <ChevronDown
            className={`
            mt-2
            transition-all
            duration-500
            ${
              isOpen
                ? "rotate-180 text-blue-600"
                : "text-gray-400 group-hover:text-blue-600"
            }
            `}
          />

        </div>
      </button>

      {/* EXPAND */}

      <div
        className={`
        overflow-hidden
        transition-all
        duration-700
        ease-in-out
        ${
          isOpen
            ? "max-h-[1200px] opacity-100"
            : "max-h-0 opacity-0"
        }
        `}
      >

        <div className="px-8 pb-10">

          <div className="ml-[88px] border-l border-gray-200 pl-8">

            {/* RESPONSIBILITIES */}

            <SectionTitle>
              Responsibilities
            </SectionTitle>

            <TagGrid items={item.responsibilities} />

            {/* PRODUCTS */}

            <SectionTitle>
              Products
            </SectionTitle>

            <TagGrid items={item.products} />

            {/* CLIENTS */}

            <SectionTitle>
              Clients & Brands
            </SectionTitle>

            <TagGrid items={item.clients} />

            {/* IMPACT */}

            <SectionTitle>
              Impact
            </SectionTitle>

            <ul className="space-y-3">

              {item.impact.map((point) => (

                <li
                  key={point}
                  className="flex gap-3 text-gray-600 leading-7"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />

                  {point}

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h4 className="mt-10 mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-400">
      {children}
    </h4>
  );
}

function TagGrid({
  items,
}: {
  items: string[];
}) {
  return (
    <div className="flex flex-wrap gap-3">

      {items.map((item) => (

        <span
          key={item}
          className="
          rounded-full
          border
          border-gray-200
          bg-gray-50
          px-4
          py-2
          text-sm
          font-medium
          text-gray-700
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:bg-blue-600
          hover:text-white
          "
        >
          {item}
        </span>

      ))}

    </div>
  );
}