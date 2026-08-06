"use client";

import { ChevronDown } from "lucide-react";

type ProcessCardProps = {
  step: {
    number: string;
    title: string;
    icon: React.ElementType;
    description: string;
    details: string;
    highlights: string[];
  };
  isOpen: boolean;
  onToggle: () => void;
};

export default function ProcessCard({
  step,
  isOpen,
  onToggle,
}: ProcessCardProps) {
  const Icon = step.icon;

  return (
    <div
      className={`
      group
      overflow-hidden
      rounded-3xl
      border
      transition-all
      duration-500
      ${
        isOpen
          ? "border-blue-500 bg-white shadow-2xl shadow-blue-100/50"
          : "border-gray-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/40"
      }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between p-8">

          <div className="flex gap-6">

            {/* Icon */}

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
                  : "bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:rotate-6"
              }
              `}
            >
              <Icon size={30} />
            </div>

            <div>

              <span className="text-sm font-semibold tracking-[0.3em] text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                {step.title}
              </h3>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                {step.description}
              </p>

            </div>

          </div>

          <ChevronDown
            className={`
            mt-2
            h-6
            w-6
            flex-shrink-0
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

      {/* Expand */}

      <div
        className={`
        overflow-hidden
        transition-all
        duration-700
        ease-in-out
        ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }
        `}
      >

        <div className="px-8 pb-8">

          <div className="ml-[88px] border-l border-gray-200 pl-8">

            <p className="text-lg leading-8 text-gray-600">
              {step.details}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {step.highlights.map((item, index) => (

                <span
                  key={item}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                  className="
                  rounded-full
                  border
                  border-blue-200
                  bg-blue-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-blue-700
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-blue-600
                  hover:bg-blue-600
                  hover:text-white
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}