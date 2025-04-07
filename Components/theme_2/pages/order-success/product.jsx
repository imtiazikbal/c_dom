import { Badge } from '@/theme_2/components/ui/badge';

export const Product = ({ product }) => {
  return (
    <div className="ne-flex ne-items-center ne-gap-4">
      <figure className="ne-w-24 ne-h-24">
        <img src={product.product.main_image} className="ne-w-full ne-h-full" />
      </figure>
      <div>
        <h1 className="ne-text-sm ne-font-medium ne-text-foreground">{product.product.product_name}</h1>
        <h2 className="ne-text-sm ne-font-normal ne-text-foreground ne-mt-0.5">৳ {product?.product_qty * product?.unit_price}</h2>
        <Badge variant="outline" className="ne-rounded-none ne-mt-4">
          x {product.product_qty}
        </Badge>
      </div>
    </div>
  );
};
