import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/theme_2/lib/utils';

const Slider = React.forwardRef(({ className, thumbClassName, value, ...props }, ref) => (
  <SliderPrimitive.Root ref={ref} className={cn('ne-relative ne-flex ne-w-full ne-touch-none ne-select-none ne-items-center', className)} value={value} {...props}>
    <SliderPrimitive.Track className="ne-relative ne-h-2 ne-w-full ne-grow ne-overflow-hidden ne-rounded-full ne-bg-secondary">
      <SliderPrimitive.Range className="ne-absolute ne-h-full ne-bg-primary" />
    </SliderPrimitive.Track>
    {Array.from({ length: value?.length }).map((_, index) => (
      <SliderPrimitive.Thumb
        key={index}
        className={cn(
          'ne-block ne-h-5 ne-w-5 ne-rounded-full ne-border-2 ne-border-primary ne-bg-background ne-ring-offset-background ne-transition-colors focus-visible:ne-outline-none focus-visible:ne-ring-2 focus-visible:ne-ring-ring focus-visible:ne-ring-offset-2 disabled:ne-pointer-events-none disabled:ne-opacity-50',
          thumbClassName
        )}
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
