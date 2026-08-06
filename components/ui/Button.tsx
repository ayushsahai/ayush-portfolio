import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        "group rounded-full px-7 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5",

        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_10px_30px_rgba(37,99,235,0.35)]"
          : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",

        className
      )}
    >
      <span className="transition-all duration-300 group-hover:tracking-wide">
        {children}
      </span>
    </button>
  );
}