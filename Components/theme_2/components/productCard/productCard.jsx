import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Values from 'values.js';
import { cn } from '@/theme_2/lib/utils';
import { Badge } from '../ui/badge';

/**
 * A single product card.
 *
 * @param {string} title - The title of the product
 * @param {string} href - The URL to the product page
 * @param {string} image - The URL to the product image
 *
 * @return {ReactElement} The product card component
 */
export const ProductCard = ({ product, variant, className }) => {
  const colorVariant = product.variants?.find(variant => variant.title?.toLowerCase() === 'color');
  if (variant === 'list')
    return (
      <Link href={`/details/${product?.slug}?id=${product?.id}`}>
        <div className={cn('ne-flex ne-items-center ne-h-full ne-border-y hover:ne-bg-primary/5 ne-transition-colors ne-relative ne-gap-2', className)}>
          {product.offerPrice && (
            <div className="ribbon ribbon-top-right">
              <span className="ne-font-semibold ne-text-center ne-uppercase">91.67% off</span>
            </div>
          )}
          <figure className="ne-relative ne-w-32 ne-h-32 ne-min-w-32 sm:ne-h-40 sm:ne-w-40 sm:ne-min-w-40">
            <Image src={product?.main_image} className="ne-object-contain" fill alt={product.product_name} />
          </figure>
          <div className="ne-min-w-0 ne-px-1">
            <div className="ne-flex ne-items-center ne-gap-1 ne-flex-wrap">
              {product.labels &&
                !!product.labels.length &&
                product.labels.map((label, index) => (
                  <Badge key={index} className={label.toLowerCase() === 'hot' && 'ne-bg-red-600'}>
                    {label}
                  </Badge>
                ))}
            </div>
            <h1 className="ne-text-foreground ne-text-base ne-mt-4">{product.product_name}</h1>
            <div className="ne-mb-2 ne-flex ne-items-center">
              <h1 className="ne-text-lg ne-font-bold">৳{product?.discounted_price }</h1>
              {product?.price > product?.discounted_price && (
                <p className="ne-ml-2 ne-line-through ne-text-red-600">
                  <span className="ne-text-neutral-500">{product?.price}</span>
                </p>
              )}
            </div>
            {colorVariant && colorVariant.options.length > 0 && (
              <div className="ne-mt-1 ne-flex ne-items-center ne-gap-2 ne-flex-wrap">
                {colorVariant.options.map(({ hex }, index) => (
                  <div key={index} className="ne-w-4 ne-h-4 ne-rounded-full" style={{ backgroundColor: hex, border: '1px solid', borderColor: new Values(hex).shade(12).rgbString() }}></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  return (
    <Link href={`/details/${product?.slug}?id=${product?.id}`}>
      <div className={cn('ne-flex ne-flex-col ne-h-full hover:ne-bg-primary/5 ne-transition-colors ne-relative ne-rounded-lg ne-p-1 group', className)}>
        <div className="ne-absolute ne-top-0 ne-left-0 ne-z-10 ne-flex ne-items-center ne-gap-1 ne-flex-wrap">
          {product.offerPrice && (
            <Badge>
              <span className="ne-font-semibold ne-text-center ne-uppercase">91.67% off</span>
            </Badge>
          )}
          {product.labels &&
            !!product.labels.length &&
            product.labels.map((label, index) => (
              <Badge key={index} className={label.toLowerCase() === 'hot' && 'ne-bg-red-600'}>
                {label}
              </Badge>
            ))}
        </div>
        <figure className="ne-relative ne-h-96 md:ne-h-72 ne-w-full ne-bg-primary/5 ne-rounded-lg ne-overflow-hidden">
          <Image src={product?.main_image} className="ne-object-cover group-hover:ne-scale-110 ne-transition-transform" fill alt={product.product_name} />
        </figure>
        <h1 className="ne-text-foreground ne-text-base ne-mt-2">{product?.product_name}</h1>
        <div className="ne-mb-2 ne-flex">
          <h1 className="ne-text-base ne-font-bold">Tk. {Number(product?.discounted_price)?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
          {product?.price > product?.discounted_price && (
            <p className="ne-ml-2 ne-line-through ne-text-red-600">
              <span className="ne-text-neutral-500">{Number(product?.price).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </p>
          )}
        </div>
        {/* {colorVariant && colorVariant.options.length > 0 && (
          <div className="ne-mt-1 ne-flex ne-items-center ne-gap-2 ne-flex-wrap">
            {colorVariant.options.map(({ hex }, index) => (
              <div key={index} className="ne-w-4 ne-h-4 ne-rounded-full" style={{ backgroundColor: hex, border: '2px solid', borderColor: new Values(hex).shade(35).rgbString() }}></div>
            ))}
          </div>
        )} */}
      </div>
    </Link>
  );
};
