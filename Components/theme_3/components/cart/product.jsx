import Image from 'next/image';
import { CartInput } from './cartInput';
import { cn } from '@/theme_3/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

export const Product = ({ size }) => {
  return (
    <div className="ne-flex ne-items-center ne-gap-4 ne-transition-colors hover:ne-bg-primary/5 focus-within:ne-ring-offset-2 focus-within:ne-ring-primary/20">
      <figure className="ne-w-16 ne-h-16 ne-relative">
        <Image src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/rIHpMX5KIHWtqoQvwJmq42dmjtpTAy2h6xuFRiUp-pcCgZi8g6xmaM8msiZcOPg0nvKwHn3.webp" fill className="ne-object-cover" />
      </figure>
      <div className="ne-min-w-0">
        <Link href="#">
          <h1 className="ne-text-base ne-text-foreground">Dermedic Hydrain3 Ultra Hydrating Cream Gel</h1>
        </Link>
        <h2 className="ne-text-sm ne-text-primary">1x ৳১০২৪.৬২</h2>
        <div className="ne-flex ne-items-center ne-justify-end">
          <Button size="icon" variant="ghost" className="ne-w-4 ne-h-4">
            <svg className="ne-w-3 ne-h-3 ne-text-neutral-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
              <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
