import { LucideIcon, ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function StrengthCard({
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.12),transparent_60%)]" />

      {/* Watermark */}
      <Icon
        className="
          absolute
          -right-8
          -bottom-8
          h-40
          w-40
          text-blue-100
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
          group-hover:rotate-12
        "
      />

      <div className="relative">

        <div className="flex items-center justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">

            <Icon className="h-7 w-7 text-blue-600" />

          </div>

          <ArrowUpRight
            className="
              opacity-0
              translate-x-2
              -translate-y-2
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-x-0
              group-hover:translate-y-0
              text-blue-600
            "
          />

        </div>

        <div className="mt-8">

          <h3 className="text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:text-blue-600">
            {title}
          </h3>

          <div className="mt-4 h-[2px] w-0 bg-blue-600 transition-all duration-500 group-hover:w-16" />

          <p className="mt-5 leading-8 text-gray-600 transition-all duration-300 group-hover:text-gray-700">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}