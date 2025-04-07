import * as React from 'react';

import { cn } from '@/theme_3/lib/utils';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'ne-border [border:1px_solid_hsl(var(--input))] ne-text-base ne-p-2 ne-bg-background ne-border-primary/80 ne-w-full disabled:ne-cursor-not-allowed disabled:ne-opacity-50 focus-within:ne-outline-primary focus-within:ne-ring-2 ne-ring-primary focus-within:ne-outline-2 ne-rounded-md',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
