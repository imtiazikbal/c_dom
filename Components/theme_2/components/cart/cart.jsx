import { ShoppingBag } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { ShoppingCart } from 'lucide-react';
import { Product } from './product';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { products } from '@/theme_2/constant';
import { ArrowRight } from 'lucide-react';
import { Shell } from 'lucide-react';
import useTotalItems from '../../../../hooks/useTotalItems';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../../redux/stateSlices/CartSlice';

export const Cart = () => {
  const { totalItems, cart ,totalPrice } = useTotalItems()
  const dispatch = useDispatch();
  const cartItems = cart?.cartItems || [];
  // console.log("cartItems" , cartItems)

  const removeItem = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="link" className="ne-py-0 ne-px-2 hover:ne-bg-primary/10 ne-relative">
          <ShoppingBag className="ne-w-5 ne-h-5" />
          <span className="ne-sr-only">Cart</span>
          <Badge className="ne-absolute -ne-right-4 ne-top-0 ne-font-bold">{totalItems}</Badge>
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby="cart-sheet" className="ne-max-h-screen ne-overflow-y-auto ne-flex ne-flex-col ne-w-full">
        <SheetHeader className="ne-border-b ne-pt-4">
          <SheetTitle className="ne-text-sm ne-flex ne-items-center ne-justify-between">
            <h1 className="ne-flex ne-items-center ne-gap-2 ne-text-sm ne-font-medium">
              <ShoppingBag className="ne-w-4 ne-h-4 ne-text-primary" />
              <span className="ne-leading-3">Cart</span>
            </h1>
            <span>{totalItems}</span>
          </SheetTitle>
        </SheetHeader>
        <div className="ne-flex ne-flex-col ne-h-full ne-gap-4 ne-overflow-y-auto">
          {totalItems === 0 ? (
            <div className="ne-flex ne-items-center ne-justify-center ne-h-full ne-flex-col ne-gap-2">
              <Shell className="ne-w-8 ne-h-8 ne-text-red-600" />
              <p className="ne-text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item, index) => <Product key={item.id} product={item} onRemove={() => removeItem(item)} />)
          )}
        </div>
        <div className="ne-mt-auto ne-space-y-4">
          {totalItems > 0 && (
            <>
            <div className='ne-flex ne-items-center ne-justify-between ne-pt-2 ne-border-t'>
              <p className='ne-text-base ne-font-medium ne-text-foreground'>Subtotal</p>
              <h1 className='ne-text-base ne-font-medium ne-text-foreground'>৳ {Number(totalPrice).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
            </div>
              <Link href="/checkout" className="ne-no-underline">
                <Button className="ne-w-full ne-text-base ne-flex ne-gap-2">
                  <ShoppingCart className="ne-w-5 ne-h-5" />
                  অর্ডার করুন
                </Button>
              </Link>
            </>
          )}
          <SheetClose asChild>
            <Button variant="link" className="ne-w-full ne-text-base ne-flex ne-gap-2">
              Continue Shopping
              <ArrowRight className="ne-w-5 ne-h-5" />
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
