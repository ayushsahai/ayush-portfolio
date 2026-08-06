import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SocialCardProps {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function SocialCard({
  href,
  title,
  subtitle,
  icon,
}: SocialCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-800 transition-all duration-500 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">
            {icon}
          </div>

          <div>

            <h4 className="text-lg font-semibold text-gray-900">
              {title}
            </h4>

            <p className="text-sm text-gray-500">
              {subtitle}
            </p>

          </div>

        </div>

        <ArrowUpRight className="text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600" />

      </div>
    </Link>
  );
}