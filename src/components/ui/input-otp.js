"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { OTPInput, useOTPInput } from "input-otp"

import { cn } from "@/lib/utils"

const InputOTP = React.forwardRef(({
  className,
  containerClassName,
  ...props
}, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef(({
  className,
  ...props
}, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPCell = React.forwardRef(({
  className,
  index,
  ...props
}, ref) => {
  const { activeMatchStr, transientValue } = useOTPInput()

  const isActive = activeMatchStr.at(0) === transientValue.at(index)

  return (
    (<div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-border text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md focus-within:z-10",
        className
      )}
      {...props}
    >
      {props.children}
      {isActive && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>)
  )
})
InputOTPCell.displayName = "InputOTPCell"

export {
  InputOTP,
  InputOTPGroup,
  InputOTPCell,
}