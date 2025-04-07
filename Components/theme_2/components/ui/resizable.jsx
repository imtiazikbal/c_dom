import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/theme_2/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "ne-flex ne-h-full ne-w-full data-[panel-group-direction=vertical]:ne-flex-col",
      className
    )}
    {...props} />
)

const ResizablePanel = ResizablePrimitive.Panel

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "ne-relative ne-flex ne-w-px ne-items-center ne-justify-center ne-bg-border after:ne-absolute after:ne-inset-y-0 after:ne-left-1/2 after:ne-w-1 after:ne--translate-x-1/2 focus-visible:ne-outline-none focus-visible:ne-ring-1 focus-visible:ne-ring-ring focus-visible:ne-ring-offset-1 data-[panel-group-direction=vertical]:ne-h-px data-[panel-group-direction=vertical]:ne-w-full data-[panel-group-direction=vertical]:after:ne-left-0 data-[panel-group-direction=vertical]:after:ne-h-1 data-[panel-group-direction=vertical]:after:ne-w-full data-[panel-group-direction=vertical]:after:ne--translate-y-1/2 data-[panel-group-direction=vertical]:after:ne-translate-x-0 [&[data-panel-group-direction=vertical]>div]:ne-rotate-90",
      className
    )}
    {...props}>
    {withHandle && (
      <div
        className="ne-z-10 ne-flex ne-h-4 ne-w-3 ne-items-center ne-justify-center ne-rounded-sm ne-border ne-bg-border">
        <GripVertical className="ne-h-2.5 ne-w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
