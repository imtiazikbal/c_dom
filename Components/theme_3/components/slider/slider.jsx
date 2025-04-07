import { Swiper } from 'swiper/react';
import { useEffect } from 'react';
import { cn } from '@/theme_2/lib/utils';

export const Slider = ({ children, className }) => {
  return (
    <Swiper className={cn('ne-h-full ne-w-full', className)} mousewheel={false} loop={true} autoplay={{ delay: 3000 }}>
      {children}
    </Swiper>
  );
};
