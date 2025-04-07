import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/theme_2/lib/utils';

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'ne-peer ne-h-4 ne-w-4 ne-shrink-0 ne-border ne-border-primary [border:1px_solid_hsl(var(--primary))] ne-ring-offset-background focus-visible:ne-outline-none focus-visible:ne-ring-2 focus-visible:ne-ring-ring focus-visible:ne-ring-offset-2 disabled:ne-cursor-not-allowed disabled:ne-opacity-50 data-[state=checked]:ne-bg-primary data-[state=checked]:ne-text-primary-foreground data-[state=checked]:[border:1px_solid_hsl(var(--primary))]',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn('ne-flex ne-items-center ne-justify-center ne-text-current')}>
      <Check className="ne-h-4 ne-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
