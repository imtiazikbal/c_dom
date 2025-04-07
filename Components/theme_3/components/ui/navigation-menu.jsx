import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/theme_3/lib/utils';

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} className={cn('ne-relative ne-z-10 ne-flex ne-max-w-max ne-flex-1 ne-items-center ne-justify-center', className)} {...props}>
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List ref={ref} className={cn('group ne-group ne-flex ne-flex-1 ne-list-none ne-items-center ne-justify-center ne-space-x-1', className)} {...props} />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'group ne-group ne-inline-flex ne-h-10 ne-w-max ne-items-center ne-justify-center ne-rounded-md ne-px-4 ne-py-2 ne-text-sm ne-font-medium ne-transition-colors hover:ne-bg-transparent hover:ne-text-primary focus:ne-bg-transparent focus:ne-text-accent-foreground focus:ne-outline-none disabled:ne-pointer-events-none disabled:ne-opacity-50'
);

const NavigationMenuTrigger = React.forwardRef(({ className, noicon, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger ref={ref} className={cn(navigationMenuTriggerStyle(), 'group', className)} {...props}>
    {children} {!noicon && <ChevronDown className="ne-relative ne-top-[1px] ne-ml-1 ne-h-3 ne-w-3 ne-transition ne-duration-200 group-data-[state=open]:ne-rotate-180" aria-hidden="true" />}
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      '-ne-left-80 ne-top-0 ne-w-full data-[motion^=from-]:ne-animate-in data-[motion^=to-]:ne-animate-out data-[motion^=from-]:ne-fade-in data-[motion^=to-]:ne-fade-out data-[motion=from-end]:ne-slide-in-from-right-52 data-[motion=from-start]:ne-slide-in-from-left-52 data-[motion=to-end]:ne-slide-out-to-right-52 data-[motion=to-start]:ne-slide-out-to-left-52 md:ne-absolute md:ne-w-auto',
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => (
  <div className={cn('ne-absolute ne-left-0 ne-top-full ne-flex ne-justify-center', className)}>
    <NavigationMenuPrimitive.Viewport className="ne-relative ne-top-0 ne-left-0 max-md:ne-w-40" ref={ref} {...props} />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      'ne-top-full ne-z-[1] ne-flex ne-h-1.5 ne-items-end ne-justify-center ne-overflow-hidden data-[state=visible]:ne-animate-in data-[state=hidden]:ne-animate-out data-[state=hidden]:ne-fade-out data-[state=visible]:ne-fade-in',
      className
    )}
    {...props}
  >
    <div className="ne-relative ne-top-[60%] ne-h-2 ne-w-2 ne-rotate-45 ne-rounded-tl-sm ne-bg-border ne-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
