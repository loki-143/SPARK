"use client";

import { Toaster as Sonner } from "sonner";

const Toaster = ({
  className,
  richColors,
  theme = "system", // You can change this to "light" or "dark" as needed
  ...props
}) => {
  return (
    <Sonner
      theme={theme}
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
