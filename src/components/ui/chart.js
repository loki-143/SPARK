"use client"

import * as React from "react"
import { useResizeObserver } from "usehooks-ts"

import { cn } from "@/lib/utils"

const ChartContext = React.createContext(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <Chart />")
  }

  return context
}

const Chart = React.forwardRef(({
  id,
  className,
  children,
  ...props
}, ref) => {
  const chartId = React.useId()
  const chartRef = React.useRef(null)
  const [config, setConfig] = React.useState({
    aspectRatio: 1,
    hasData: false,
  })

  const declaration = React.useMemo(() => {
    if (typeof children !== "object" || children === null) {
      return null
    }

    const chartDeclaration = (
      children
    )

    return chartDeclaration
  }, [children])

  const bind = React.useCallback((el) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      hasData: !(!declaration || !(declaration?.data))
    }))

    if (declaration) {
      let chart = el

      // If chart is not already a chart object, create a new chart object
      if (!chart || chart.tagName !== "CANVAS") {
        // Clear the old chart and create a new one
        el?.parentElement?.querySelector("canvas")?.remove()
        chart = document.createElement("canvas")
        chart.style.display = "block"
        el.appendChild(chart)
      }

      // Initialize chart on canvas element
      let currentChart = chart.chart || null

      if (currentChart) {
        currentChart.destroy()
      }
      // TODO: use chartjs-adapter-date-fns for date and time scale
      currentChart = new window.Chart(chart, declaration);
      chart.chart = currentChart; // Store the chart object on the canvas element


      return () => {
        currentChart?.destroy()
      }
    }

    return () => {
      el?.parentElement?.querySelector("canvas")?.remove()
    }
  }, [declaration])

  const { ref: containerRef } = useResizeObserver({
    onResize: () => {
      // Find the canvas element and update the chart
      const canvas = containerRef.current?.querySelector("canvas")
      if (canvas?.chart) {
        canvas.chart.update()
      }
    },
  })

  return (
    <ChartContext.Provider
      value={{
        config,
        setConfig,
      }}
    >
      <div
        id={id ?? `chart-${chartId}`}
        ref={(
          node => {
            containerRef(node)
            chartRef.current = node
            if (node) {
              bind(node)
            }
          }
        )}
        className={cn("flex w-full flex-col", className)}
        {...props}
      >
        {/* {children} */}
      </div>
    </ChartContext.Provider>
  )
})

Chart.displayName = "Chart"

export { Chart, useChart }