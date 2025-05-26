import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Card = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-4 shadow-md dark:bg-gray-900", // removed border and dark:border
        className
      )}
      {...props}
    />
  );
};
