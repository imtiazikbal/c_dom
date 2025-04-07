import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/theme_2/lib/utils';
import { useDispatch } from 'react-redux';
import { addToCart, decreaseCart } from '../../../../redux/stateSlices/CartSlice';

export const CartInput = ({ product ,initialQuantity = 1, onQuantityChange, className, size }) => {
  const dispatch = useDispatch();
  const handleDecreaseCart = (product) => {
    if (product.cartQuantity < 2) {
      return;
    }
    dispatch(decreaseCart(product));
  };
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className={cn('ne-inline-flex ne-items-center ne-bg-primary/10 ne-rounded-md ne-overflow-hidden max-sm:ne-min-w-36', className)}>
      <Button variant="ghost" onClick={() => handleDecreaseCart(product)} className={cn('ne-px-3 ne-py-2 ne-bg-transparent ne-outline-none hover:ne-bg-primary/10', size === 'small' && 'ne-px-1 ne-py-2 ne-h-auto')}>
        <Minus size={16} />
      </Button>
      <input
        type="number"
        min="1"
        value={initialQuantity}
        // onChange={handleInputChange}
        className="ne-w-16 ne-text-center ne-border-none ne-focus:outline-none ne-[-moz-appearance:textfield] ne-[&::-webkit-outer-spin-button]:ne-appearance-none ne-[&::-webkit-inner-spin-button]:ne-appearance-none ne-bg-transparent"
      />
      <Button variant="ghost" onClick={() => handleAddToCart(product)} className={cn('ne-px-3 ne-py-2 ne-bg-transparent ne-outline-none hover:ne-bg-primary/10', size === 'small' && 'ne-px-1 ne-py-2 ne-h-auto')}>
        <Plus size={16} />
      </Button>
    </div>
  );
};
