import { ArrowUpRight } from "lucide-react";

interface CompanyCardProps {
  company: {
    name: string;
    project: string;
    category: string;
    year: string;
  };
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div
      className="
        group
        relative
        w-[580px]
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        transition-all
        duration-500
        ease-out
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        cursor-pointer
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.10),transparent_55%)]
        "
      />

      <div className="relative">

        {/* Top Row */}

        <div className="flex items-center justify-between">

          <h3
            className="
              text-xl
              font-semibold
              tracking-tight
              transition-all
              duration-300
              group-hover:text-blue-600
            "
          >
            {company.name}
          </h3>

{/*          <ArrowUpRight
            size={20}
            className="
              translate-x-2
              -translate-y-2
              opacity-0
              transition-all
              duration-300
              group-hover:translate-x-0
              group-hover:translate-y-0
              group-hover:opacity-100
              text-blue-600
            "
          />*/}

        </div>

        {/* Divider */}

        <div
          className="
            mt-4
            h-px
            w-0
            bg-blue-500
            transition-all
            duration-500
            group-hover:w-full
          "
        />

        {/* Hidden Content */}

        <div
          className="
            grid
            transition-all
            duration-500
            grid-rows-[0fr]
            group-hover:grid-rows-[1fr]
          "
        >
          <div className="overflow-hidden">

            <div className="pt-5 space-y-4">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                  Project
                </p>

                <p className="mt-1 font-medium text-gray-800">
                  {company.project}
                </p>

              </div>

              <div className="flex justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Domain
                  </p>

                  <p className="mt-1 text-gray-700">
                    {company.category}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Year
                  </p>

                  <p className="mt-1 text-gray-700">
                    {company.year}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}