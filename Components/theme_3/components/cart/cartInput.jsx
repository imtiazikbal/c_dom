import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '@/theme_3/lib/utils';

export const CartInput = ({ initialQuantity = 1, onQuantityChange, className, size }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange && onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange && onQuantityChange(newQuantity);
    }
  };

  const handleInputChange = e => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
      onQuantityChange && onQuantityChange(value);
    }
  };

  return (
    <div className={cn('ne-inline-flex ne-items-center ne-bg-primary/10 ne-rounded-md ne-overflow-hidden', className)}>
      <Button variant="ghost" onClick={handleDecrement} className={cn('ne-px-3 ne-py-2 ne-bg-transparent ne-outline-none hover:ne-bg-primary/10', size === 'small' && 'ne-px-1 ne-py-2 ne-h-auto')}>
        <Minus size={16} />
      </Button>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleInputChange}
        className="ne-w-16 ne-text-center ne-border-none ne-focus:outline-none ne-[-moz-appearance:textfield] ne-[&::-webkit-outer-spin-button]:ne-appearance-none ne-[&::-webkit-inner-spin-button]:ne-appearance-none ne-bg-transparent"
      />
      <Button variant="ghost" onClick={handleIncrement} className={cn('ne-px-3 ne-py-2 ne-bg-transparent ne-outline-none hover:ne-bg-primary/10', size === 'small' && 'ne-px-1 ne-py-2 ne-h-auto')}>
        <Plus size={16} />
      </Button>
    </div>
  );
};
