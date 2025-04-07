import Image from 'next/image';
import { CartInput } from './cartInput';
import { cn } from '@/theme_2/lib/utils';

export const Product = ({ product, onRemove, size }) => {
  return (
    <div className="ne-flex ne-items-center ne-gap-4 ne-transition-colors hover:ne-bg-primary/5 focus-within:ne-ring-offset-2 focus-within:ne-ring-primary/20">
      <figure
        className={cn(
          'ne-relative ne-w-20 ne-h-20 ne-min-w-20',
          size !== 'small' && 'ne-bg-primary/5 ne-overflow-hidden ne-rounded-md ne-w-28 ne-h-28 ne-min-w-28',
          size === 'small' && 'ne-rounded-md ne-border'
        )}
      >
        <Image src={product.main_image} alt={product.title} fill className="ne-object-cover" />
      </figure>
      <div className="ne-min-w-0">
        <h1 className="ne-text-base ne-text-foreground">{product.product_name}{product.variant && ` -${product.variant}`} </h1>
        <h2 className="ne-text-sm ne-text-primary">৳{Number(product?.discounted_price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ||Number(product.price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
        <div className="ne-flex ne-items-center sm:ne-gap-4 max-sm:ne-flex-wrap max-sm:ne-max-w-[50%]">
          <CartInput  product={product} initialQuantity={product.cartQuantity} className={size === 'small' && 'ne-border ne-border-primary'} size={size} />
          <button onClick={onRemove} className="ne-text-red-500 hover:ne-underline max-sm:ne-items-start max-sm:ne-text-start">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
