import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  project: {
    title: string;
    description: string;
    image: string;
    href: string;
    tags: string[];
    featured: boolean;
  };
}

export default function FeaturedProject({ project }: Props) {
  return (
    <Link
      href={project.href}
      className={`group block overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl ${
        project.featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative h-80 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      </div>

      <div className="p-8">

        <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-600">
          {project.title}
        </h3>

        <p className="mt-5 leading-8 text-gray-600">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm transition-all duration-300 group-hover:bg-blue-50 group-hover:text-blue-700"
            >
              {tag}
            </span>
          ))}

        </div>

        <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600">

          Explore Project

          <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

        </div>

      </div>
    </Link>
  );
}