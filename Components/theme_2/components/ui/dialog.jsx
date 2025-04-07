import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@/theme_2/lib/utils';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'ne-fixed ne-inset-0 ne-z-50 ne-bg-black/80 ne- data-[state=open]:ne-animate-in data-[state=closed]:ne-animate-out data-[state=closed]:ne-fade-out-0 data-[state=open]:ne-fade-in-0',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'ne-fixed ne-left-[50%] ne-top-[50%] ne-z-50 ne-grid ne-w-full ne-max-w-lg ne-translate-x-[-50%] ne-translate-y-[-50%] ne-gap-4 ne-border ne-bg-background ne-p-6 ne-shadow-lg ne-duration-200 data-[state=open]:ne-animate-in data-[state=closed]:ne-animate-out data-[state=closed]:ne-fade-out-0 data-[state=open]:ne-fade-in-0 data-[state=closed]:ne-zoom-out-95 data-[state=open]:ne-zoom-in-95 data-[state=closed]:ne-slide-out-to-left-1/2 data-[state=closed]:ne-slide-out-to-top-[48%] data-[state=open]:ne-slide-in-from-left-1/2 data-[state=open]:ne-slide-in-from-top-[48%] ne-rounded-md',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="ne-absolute ne-right-4 ne-top-4 ne-opacity-70 ne-ring-offset-background ne-transition-opacity hover:ne-opacity-100 focus:ne-outline-none focus:ne-ring-2 focus:ne-ring-ring focus:ne-ring-offset-2 disabled:ne-pointer-events-none hover:ne-text-primary data-[state=open]:ne-bg-accent data-[state=open]:ne-text-muted-foreground">
        <X className="ne-h-4 ne-w-4 hover:ne-text-primary ne-text-foreground" />
        <span className="ne-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }) => <div className={cn('ne-flex ne-flex-col ne-space-y-1.5 ne-text-center sm:ne-text-left', className)} {...props} />;
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }) => <div className={cn('ne-flex ne-flex-col-reverse sm:ne-flex-row sm:ne-justify-end sm:ne-space-x-2', className)} {...props} />;
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('ne-text-lg ne-font-semibold ne-leading-none ne-tracking-tight', className)} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => <DialogPrimitive.Description ref={ref} className={cn('ne-text-sm ne-text-muted-foreground', className)} {...props} />);
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
