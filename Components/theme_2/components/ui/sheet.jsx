import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@/theme_2/lib/utils';

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'ne-fixed ne-inset-0 ne-z-50 ne-bg-black/80 ne- data-[state=open]:ne-animate-in data-[state=closed]:ne-animate-out data-[state=closed]:ne-fade-out-0 data-[state=open]:ne-fade-in-0',
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  'ne-fixed ne-z-50 ne-gap-4 ne-bg-background ne-p-6 ne-shadow-lg ne-transition ne-ease-in-out data-[state=open]:ne-animate-in data-[state=closed]:ne-animate-out data-[state=closed]:ne-duration-300 data-[state=open]:ne-duration-500',
  {
    variants: {
      side: {
        top: 'ne-inset-x-0 ne-top-0 ne-border-b data-[state=closed]:ne-slide-out-to-top data-[state=open]:ne-slide-in-from-top',
        bottom: 'ne-inset-x-0 ne-bottom-0 ne-border-t data-[state=closed]:ne-slide-out-to-bottom data-[state=open]:ne-slide-in-from-bottom',
        left: 'ne-inset-y-0 ne-left-0 ne-h-full ne-w-3/4 ne-border-r data-[state=closed]:ne-slide-out-to-left data-[state=open]:ne-slide-in-from-left sm:ne-max-w-sm',
        right: 'ne-inset-y-0 ne-right-0 ne-h-full ne-w-3/4 ne- ne-border-l data-[state=closed]:ne-slide-out-to-right data-[state=open]:ne-slide-in-from-right sm:ne-max-w-sm',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

const SheetContent = React.forwardRef(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
      <SheetPrimitive.Close className="ne-absolute ne-right-4 ne-top-4 ne-opacity-70 ne-ring-offset-background ne-transition-opacity hover:ne-opacity-100 focus:ne-outline-none focus:ne-ring-2 focus:ne-ring-ring focus:ne-ring-offset-2 disabled:ne-pointer-events-none data-[state=open]:ne-bg-secondary">
        <X className="ne-h-4 ne-w-4" />
        <span className="ne-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }) => <div className={cn('ne-flex ne-flex-col ne-space-y-2 ne-text-center sm:ne-text-left', className)} {...props} />;
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }) => <div className={cn('ne-flex ne-flex-col-reverse sm:ne-flex-row sm:ne-justify-end sm:ne-space-x-2', className)} {...props} />;
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => <SheetPrimitive.Title ref={ref} className={cn('ne-text-lg ne-font-semibold ne-text-foreground', className)} {...props} />);
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => <SheetPrimitive.Description ref={ref} className={cn('ne-text-sm ne-text-muted-foreground', className)} {...props} />);
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export { Sheet, SheetPortal, SheetOverlay, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription };
