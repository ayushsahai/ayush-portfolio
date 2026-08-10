"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FeaturedProjectProps = {
  project: {
    title: string;
    description: string;
    image: string;
    category?: string;
    tags?: string[];
    href?: string;
  };
};

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  const href = project.href || "#";

  return (
    <Link
      href={href}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-gray-200
        bg-white
        shadow-[0_10px_40px_rgba(15,23,42,0.04)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-gray-300
        hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]
      "
    >

      {/* IMAGE */}
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-gray-100">

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.04]
          "
        />

        {/* IMAGE OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
            opacity-60
            transition-opacity
            duration-500
            group-hover:opacity-30
          "
        />

        {/* CATEGORY */}
        {project.category && (
          <div className="absolute left-5 top-5">
            <span
              className="
                rounded-full
                border
                border-white/30
                bg-black/50
                px-4
                py-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white
                backdrop-blur-md
              "
            >
              {project.category}
            </span>
          </div>
        )}

        {/* TOP ARROW */}
        <div
          className="
            absolute
            right-5
            top-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white
            text-gray-900
            shadow-lg
            transition-all
            duration-500
            group-hover:rotate-45
            group-hover:scale-105
          "
        >
          <ArrowUpRight size={18} />
        </div>

      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-8 md:p-9">

        {/* TITLE */}
        <h3
          className="
            text-2xl
            font-bold
            leading-tight
            tracking-tight
            text-gray-900
            transition-colors
            duration-300
            group-hover:text-blue-600
          "
        >
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-base leading-7 text-gray-600">
          {project.description}
        </p>

        {/* TAGS */}
        {project.tags && project.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-gray-600
                  transition-colors
                  duration-300
                  group-hover:border-gray-300
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            border-t
            border-gray-100
            pt-6
            mt-8
          "
        >
          <span className="text-sm font-semibold text-gray-900">
            Read Full Case Study
          </span>

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              text-gray-700
              transition-all
              duration-500
              group-hover:translate-x-1
              group-hover:border-blue-600
              group-hover:bg-blue-600
              group-hover:text-white
            "
          >
            <ArrowUpRight size={16} />
          </span>
        </div>

      </div>
    </Link>
  );
}