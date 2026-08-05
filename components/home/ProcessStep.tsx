import { ArrowUpRight, LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="group relative pl-24">

      {/* Timeline */}
      {!isLast && (
        <div className="absolute left-9 top-20 h-full w-px bg-gray-200 transition-colors duration-500 group-hover:bg-blue-500" />
      )}

      {/* Number Circle */}
      <div className="absolute left-0 top-0 flex h-18 w-18 items-center justify-center">
        <div
          className="
            flex h-18 w-18 items-center justify-center
            rounded-full
            border-2
            border-gray-200
            bg-white
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:border-blue-600
            group-hover:shadow-xl
          "
        >
          <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
            {number}
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-8
          transition-all
          duration-500
          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-2xl
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.12),transparent_60%)]" />

        {/* Watermark Icon */}
        <Icon className="absolute right-6 bottom-6 h-28 w-28 text-blue-100 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-50 p-3 transition-all duration-300 group-hover:rotate-6">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>

              <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-blue-600">
                {title}
              </h3>

            </div>

            <ArrowUpRight className="translate-x-2 -translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 text-blue-600" />

          </div>

          <div className="mt-6 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-24" />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}