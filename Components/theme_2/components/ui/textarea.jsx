import * as React from 'react';

import { cn } from '@/theme_2/lib/utils';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'ne-flex ne-min-h-[80px] ne-w-full ne-border [border:1px_solid_hsl(var(--input))] ne-text-base ne-p-2 ne-bg-background ne-border-primary/80 ne-w-full disabled:ne-cursor-not-allowed disabled:ne-opacity-50 focus-within:ne-outline-primary focus-within:ne-ring-2 ne-ring-primary focus-within:ne-outline-2',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
