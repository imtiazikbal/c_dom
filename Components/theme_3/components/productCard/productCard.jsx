import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/theme_2/lib/utils';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/stateSlices/CartSlice';
import { useRouter } from "next/router";

/**
 * A single product card.
 *
 * @param {string} title - The title of the product
 * @param {string} href - The URL to the product page
 * @param {string} image - The URL to the product image
 *
 * @return {ReactElement} The product card component
 */
export const ProductCard = ({ product={}, minimal, className }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleAddToCart = (product, detailsPageUrl) => {
    if (product?.attributes) {
      router.replace(detailsPageUrl)
    } else {
      dispatch(addToCart(product));

      // if (domainInfo?.other_script?.gtm_head) {
      //   tagManagerEvent('add_to_cart', product?.discounted_price, product)
      // }
    }
  };
  return (
    <Link href={`/details/${product?.slug}?id=${product?.id}`}>
      <div
        className={cn(
          'ne-flex ne-flex-col ne-h-full hover:ne-bg-primary/5 ne-transition-colors ne-relative ne-rounded-lg group ne-bg-white ne-shadow-md ne-p-2 group ne-group ne-overflow-hidden', minimal && 'ne-bg-transparent hover:ne-bg-transparent ne-border-0 ne-shadow-none ne-p-0 ne-text-center ne-pb-6',
          className
        )}
      >
        <Button
          size="icon"
          variant="secondary"
          className="ne-w-6 ne-h-6 ne-rounded-full ne-bg-white ne-shadow-md hover:ne-bg-primary hover:ne-text-primary-foreground ne-absolute ne-top-4 ne-transition-[right] group-hover:ne-right-4 -ne-right-6 ne-z-[1]"
        >
          <ShoppingCart className="ne-w-3 ne-h-3" />
        </Button>
        <figure className="ne-relative ne-h-56 md:ne-h-72 ne-w-full ne-bg-primary/5 ne-rounded-lg ne-overflow-hidden">
          <Image src={product?.main_image} className="ne-object-cover group-hover:ne-scale-110 ne-transition-transform" fill />
        </figure>
        <h1 className="ne-text-foreground ne-text-base ne-mt-2">{product?.product_name}</h1>
        {!minimal && (
          <>
            <div className="ne-mb-2 ne-flex ne-gap-2">
              {product?.price > product?.discounted_price &&(
                <p className="ne-line-through ne-text-red-600">
                  <span className="ne-text-neutral-500 ne-text-base">৳{product?.price}</span>
                </p>
              )}
              <h1 className="ne-text-base ne-font-bold">৳{product?.discounted_price}</h1>
            </div>
            <Button className="ne-gap-2 ne-mt-auto" onClick={() => handleAddToCart(product, `/details/${product?.slug}?id=${product?.id}`)}>
              <ShoppingCart className="ne-w-4 ne-h-4" />
              Add To Cart
            </Button>
          </>
        )}
      </div>
    </Link>
  );
};
