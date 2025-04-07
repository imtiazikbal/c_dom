import { cn } from '@/theme_2/lib/utils';
import * as React from 'react';
import { Button } from '../ui/button';
import { ChevronDown } from 'lucide-react';

export const Collapsible = ({ children, className, title }) => {
  const [collasped, setCollasped] = React.useState(false);
  const [offsetHeight, setOffsetHeight] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) setOffsetHeight(ref.current.offsetHeight);
  }, [ref]);
  return (
    <div>
      <div className="ne-flex ne-items-center ne-justify-between ne-border-b">
        <h1 className="ne-text-base">{title}</h1>
        <Button variant="ghost" className="ne-inline-flex ne-w-10 ne-h-10 ne-p-0" onClick={() => setCollasped(!collasped)}>
          <ChevronDown className={cn('ne-w-5 ne-h-5 ne-transition-transform', collasped && 'ne-rotate-180')} />
        </Button>
      </div>
      <div className={cn('ne-overflow-y-hidden ne-transition-[height]', className)} style={{ height: collasped ? 0 : offsetHeight || ref.current?.offsetHeight }} ref={ref}>
        {children}
      </div>
    </div>
  );
};
