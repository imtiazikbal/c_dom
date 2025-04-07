import { cn } from '@/theme_2/lib/utils';
import { Spinner } from '../ui/spinner';
import { Button } from '../ui/button';

export const LoadMore = ({ isLoading, onClick }) => {
  return (
    <Button onClick={onClick} className="ne-inline-flex ne-w-auto ne-px-8 ne-font-semibold ne-text-primary ne-border-primary/60 ne-border ne-relative ne-text-base">
      <span className={cn('ne-text-white', isLoading && 'ne-opacity-0')}>Load More</span>
      {isLoading && <Spinner className="ne-w-5 ne-h-5 ne-absolute ne-text-white" />}
    </Button>
  );
};
