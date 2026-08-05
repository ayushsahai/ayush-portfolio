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
        "rounded-xl px-6 py-3 font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",
        className
      )}
    >
      {children}
    </button>
  );
}