"use client";

import { Toaster as Sonner } from "sonner";
import { cn } from "@/lib/utils"; // ✅ Add this line

const Toaster = ({
  theme = "system",
  className,
  richColors,
  ...props
}) => {
  return (
    <Sonner
      theme={theme}
      className={cn("toaster group", className)}
      richColors={richColors}
      {...props}
      toastOptions={{
        classes: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:fill-foreground group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
    />
  );
};

export { Toaster };
