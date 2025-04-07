import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/theme_3/lib/utils"

const badgeVariants = cva(
  "ne-inline-flex ne-items-center ne-rounded-full ne-border ne-px-2.5 ne-py-0.5 ne-text-xs ne-font-semibold ne-transition-colors focus:ne-outline-none focus:ne-ring-2 focus:ne-ring-ring focus:ne-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "ne-border-transparent ne-bg-primary ne-text-primary-foreground hover:ne-bg-primary/80",
        secondary:
          "ne-border-transparent ne-bg-secondary ne-text-secondary-foreground hover:ne-bg-secondary/80",
        destructive:
          "ne-border-transparent ne-bg-destructive ne-text-destructive-foreground hover:ne-bg-destructive/80",
        outline: "ne-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
