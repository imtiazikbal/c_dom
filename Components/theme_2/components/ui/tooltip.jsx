import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/theme_2/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'ne-z-50 ne-overflow-hidden ne-rounded-md ne-border ne-bg-primary ne-px-3 ne-py-1.5 ne-text-sm ne-text-primary-foreground ne-shadow-md ne-animate-in ne-fade-in-0 ne-zoom-in-95 data-[state=closed]:ne-animate-out data-[state=closed]:ne-fade-out-0 data-[state=closed]:ne-zoom-out-95 data-[side=bottom]:ne-slide-in-from-top-2 data-[side=left]:ne-slide-in-from-right-2 data-[side=right]:ne-slide-in-from-left-2 data-[side=top]:ne-slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
