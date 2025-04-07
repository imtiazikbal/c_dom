import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/theme_3/lib/utils';

const buttonVariants = cva(
  'ne-inline-flex ne-items-center ne-justify-center ne-whitespace-nowrap ne-rounded ne-text-sm ne-font-medium ne-ring-offset-background ne-transition-colors focus-visible:ne-outline-none focus-visible:ne-ring-2 focus-visible:ne-ring-ring focus-visible:ne-ring-offset-2 disabled:ne-pointer-events-none disabled:ne-opacity-50 active:ne-ring-2 active:ne-ring-primary/30 focus:ne-ring-2 focus:ne-ring-primary/30 focus-within:ne-ring-2 focus-within:ne-ring-primary/30',
  {
    variants: {
      variant: {
        default: 'ne-bg-primary ne-text-primary-foreground hover:ne-bg-primary/90',
        destructive: 'ne-bg-destructive ne-text-destructive-foreground hover:ne-bg-destructive/90',
        outline: 'ne-border ne-border-input [border:1px_solid_hsl(var(--input))] ne-bg-background hover:ne-bg-accent hover:ne-text-accent-foreground ne-text-foreground',
        secondary: 'ne-bg-secondary ne-text-secondary-foreground hover:ne-bg-secondary/80',
        ghost: 'hover:ne-bg-accent hover:ne-text-accent-foreground',
        link: 'ne-text-primary ne-underline-offset-4 hover:ne-underline',
      },
      size: {
        default: 'ne-h-10 ne-px-4 ne-py-2',
        sm: 'ne-h-9 ne-rounded-md ne-px-3',
        lg: 'ne-h-11 ne-rounded-md ne-px-8',
        icon: 'ne-h-10 ne-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
