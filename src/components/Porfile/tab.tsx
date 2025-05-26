"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = ({
  className,
  ...props
}: TabsPrimitive.TabsListProps) => (
  <TabsPrimitive.List
    className={cn(
      "inline-flex w-full items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
);

export const TabsTrigger = ({
  className,
  ...props
}: TabsPrimitive.TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex w-full items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
      "hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
);

export const TabsContent = ({
  className,
  ...props
}: TabsPrimitive.TabsContentProps) => (
  <TabsPrimitive.Content
    className={cn("mt-2 rounded-xl p-4 shadow-sm", className)}
    {...props}
  />
);
