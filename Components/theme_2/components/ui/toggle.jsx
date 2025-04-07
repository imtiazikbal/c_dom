import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva } from 'class-variance-authority';

import { cn } from '@/theme_2/lib/utils';

const toggleVariants = cva(
  'ne-inline-flex ne-items-center ne-justify-center ne-rounded-md ne-text-sm ne-font-medium ne-ring-offset-background ne-text-muted-foreground ne-transition-colors hover:ne-bg-muted hover:ne-text-muted-foreground focus-visible:ne-outline-none focus-visible:ne-ring-2 focus-visible:ne-ring-ring focus-visible:ne-ring-offset-2 disabled:ne-pointer-events-none disabled:ne-opacity-50 data-[state=on]:ne-bg-primary/10 data-[state=on]:ne-text-primary ne-w-auto ne-font-semibold',
  {
    variants: {
      variant: {
        default: 'ne-bg-transparent',
        outline:
          'ne-border ne-border-input [border:1px_solid_hsl(var(--input))] ne-bg-transparent hover:ne-bg-accent hover:ne-text-accent-foreground data-[state=on]:[border:1px_solid_hsl(var(--primary))]',
      },
      size: {
        default: 'ne-h-8 ne-px-3',
        sm: 'ne-h-9 ne-px-2.5',
        lg: 'ne-h-11 ne-px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Toggle = React.forwardRef(({ className, variant, size, ...props }, ref) => <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
