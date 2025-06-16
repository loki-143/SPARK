"use client"

import * as React from "react"

import { ToastAction } from "@/components/ui/toast"
import { create } from "zustand"


const TOAST_LIMIT = 1







const useToast = create(set => ({
  toasts: [],
  addToast: (toast) =>
    set(state => ({
      toasts: [toast, ...state.toasts].slice(0, TOAST_LIMIT),
    })),
  updateToast: (toastId, toast) =>
    set(state => ({
      toasts: state.toasts.map(t =>
        t.id === toastId ? { ...t, ...toast } : t
      ),
    })),
  removeToast: (toastId) =>
    set(state => ({
      toasts: state.toasts.filter(t => t.id !== toastId),
    })),
}))

function useToastStore() {
  const {
    toasts,
    addToast,
    updateToast,
    removeToast,
  } = useToast()

  const dismiss = React.useCallback(
    (toastId) => removeToast(toastId),
    [removeToast]
  )

  const toast = React.useCallback(({
    ...rest
  }) => {
    const id = crypto.randomUUID()

    const update = (props) => updateToast(id, props)
    const dismissToast = () => dismiss(id)

    addToast({
      id,
      ...rest
    })

    return {
      id,
      dismiss: dismissToast,
      update,
    }
  }, [addToast, dismiss, updateToast])

  return {
    toasts,
    toast,
    dismiss,
  }
}

export { useToastStore as useToast }