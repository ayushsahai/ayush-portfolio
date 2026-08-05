import { Quote } from "lucide-react";

interface Props {
  quote: string;
  author: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  author,
  company,
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
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.10),transparent_60%)]" />

      {/* Watermark Quote */}
      <Quote className="absolute -right-6 -top-6 h-32 w-32 text-blue-100 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-12" />

      <div className="relative">
        <Quote className="h-10 w-10 text-blue-600" />

        <p className="mt-8 text-lg leading-8 text-gray-700 italic">
          “{quote}”
        </p>

        <div className="mt-10">
          <div className="h-px w-16 bg-blue-600 transition-all duration-500 group-hover:w-28"></div>

          <h4 className="mt-5 text-lg font-semibold text-gray-900">
            {author}
          </h4>

          <p className="text-gray-500">{company}</p>
        </div>
      </div>
    </div>
  );
}