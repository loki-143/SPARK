"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const Sidebar = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex h-screen w-64 flex-col overflow-y-auto border-r bg-background px-3 py-4",
      className
    )}
    {
      ...props
    }
  />
))

Sidebar.displayName = "Sidebar"

export { Sidebar }