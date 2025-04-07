import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn } from '@/theme_3/lib/utils';

const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn('ne-grid ne-gap-2', className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'ne-aspect-square ne-h-4 ne-w-4 ne-rounded-full ne-border ne-border-primary ne-text-primary ne-ring-offset-background focus:ne-outline-none focus-visible:ne-ring-2 focus-visible:ne-ring-ring focus-visible:ne-ring-offset-2 disabled:ne-cursor-not-allowed disabled:ne-opacity-50 [border:2px_solid_hsl(var(--border))] ne-p-0 ne-flex ne-items-center ne-justify-center',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="ne-flex ne-items-center ne-justify-center">
        <div className="ne-border-4 ne-border-primary ne-p-1 ne-rounded-full"></div>
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
