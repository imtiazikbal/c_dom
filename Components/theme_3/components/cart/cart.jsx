import { Button } from '../ui/button';
import { Product } from './product';
import Image from 'next/image';
import bagIcon from '@/theme_3/assets/images/Bag-W.webp';
import { useRef, useState } from 'react';
import { useClickOutside } from '@/theme_3/hooks/useOutsideClick';
import Link from 'next/link';

export const Cart = () => {
  const [show, setShow] = useState(false);
  const cartRef = useRef(null);

  useClickOutside(cartRef, () => setShow(false));

  return (
    <div className="ne-relative ne-flex ne-items-center ne-justify-center">
      <Button variant="link" className="ne-py-0 ne-px-2 hover:ne-bg-primary/10 ne-relative" onClick={() => setShow(!show)}>
        <Image src={bagIcon} alt="Cart" className="ne-w-10 ne-h-10" />
        <span className="ne-sr-only">Search</span>
        <span className="ne-absolute ne-inset-0 ne-flex ne-items-center ne-justify-center ne-text-center ne-text-white ne-mt-2">12</span>
      </Button>
      {show && (
        <div ref={cartRef} className="ne-absolute ne-top-full ne-rounded-md ne-bg-white ne-w-[calc(100vw-3rem)] md:ne-w-80 ne-right-0 ne-shadow">
          <div className="ne-p-4 ne-border-b">Cart Items</div>
          <div className="ne-max-h-96 ne-min-h-60 ne-overflow-y-auto ne-p-2">
            <Product />
          </div>
          <div className="ne-flex ne-items-center ne-justify-between ne-px-4 ne-py-2 ne-border-y">
            <span className="ne-text-base ne-text-neutral-600">Subtotal</span>
            <p className="ne-text-base ne-text-foreground ne-font-medium">৳1,640</p>
          </div>
          <div className="ne-py-2 ne-px-4 ne-flex ne-items-center ne-justify-center ne-gap-2">
            <Button size="sm" variant="secondary" className="ne-bg-neutral-300 hover:ne-bg-primary hover:ne-text-primary-foreground" onClick={() => setShow(false)}>
              Continue Shopping
            </Button>
            <Link href="/checkout" className='ne-w-1/2'>
              <Button size="sm">Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
