import { Layout } from '@/theme_2/layout';
import { ToggleGroup, ToggleGroupItem } from '@/theme_2/components/ui/toggle-group';
import { Check, Truck } from 'lucide-react';
import { CartInput } from '@/theme_2/components/cart/cartInput';
import { Button } from '@/theme_2/components/ui/button';
import { description, products } from '@/theme_2/constant';
import { Dialog, DialogContent, DialogTrigger } from '@/theme_2/components/ui/dialog';
import ImageGallery from 'react-image-gallery';
import Zoom from 'react-medium-image-zoom';
import Values from 'values.js';
import { Title } from '@/theme_2/components/title/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ProductCard } from '@/theme_2/components/productCard/productCard';
import { Badge } from '@/theme_2/components/ui/badge';
import { cn } from '@/theme_2/lib/utils';
import { useState, useEffect } from 'react';

const initialImages = [
  {
    original: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Z7II_24-70_4_front-u4fGpciSXiUFUl3N1ZGeORlSrV3i8g.webp',
    thumbnail: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Z7II_24-70_4_front-u4fGpciSXiUFUl3N1ZGeORlSrV3i8g.webp',
  },
  {
    original: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Z7II_24_70_4_WR_R11b_SB5000-VUrmAybWBt2kOl788IqGFrlP8WkSrb.webp',
    thumbnail: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Z7II_24_70_4_WR_R11b_SB5000-VUrmAybWBt2kOl788IqGFrlP8WkSrb.webp',
  },
  {
    original: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/Z7II_24-70_4_front-u4fGpciSXiUFUl3N1ZGeORlSrV3i8g.webp',
    thumbnail: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/highvoltage12ozgroundfront-Tfpz12UcqpGmQEjJ4VGRgimqFrhPgK.webp',
  },
  {
    original: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/highvoltage12ozback-6TBlvXDLt8U86uhxCK1NFUid9lsmeA.jpg',
    thumbnail: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/highvoltage12ozback-6TBlvXDLt8U86uhxCK1NFUid9lsmeA.jpg',
  },
  {
    original: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/highvoltage12oz-resized-7RGPd8Ms60VG3NsajlTxh4XXBhbWK8.jpg',
    thumbnail: 'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/highvoltage12oz-resized-7RGPd8Ms60VG3NsajlTxh4XXBhbWK8.jpg',
  },
];

export const Details = () => {
  const randomProduct = products[Math.floor(Math.random() * products.length)];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState(randomProduct.image ? [{ original: randomProduct.image, thumbnail: randomProduct.image }, ...initialImages] : initialImages)
  const [selectedVariants, setSelectedVariants] = useState({});

  useEffect(() => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    setProduct(randomProduct);
    setImages(randomProduct.image ? [{ original: randomProduct.image, thumbnail: randomProduct.image }, ...initialImages] : initialImages)
    if (randomProduct.variants) {
      const initialVariants = {};
      randomProduct.variants.forEach(variant => {
        initialVariants[variant.title] = variant.options[0].name || variant.options[0];
      });
      setSelectedVariants(initialVariants);
    }
  }, []);

  const renderItem = item => {
    return (
      <div className="image-gallery-image">
        <Zoom>
          <img src={item.original} alt="" />
        </Zoom>
      </div>
    );
  };

  const renderThumbInner = item => {
    return (
      <div className="image-gallery-thumbnail-inner">
        <img src={item.thumbnail} alt="" className="image-gallery-thumbnail-image" />
      </div>
    );
  };

  const applyColorStyles = (node, colorHex, darkerBorderColor, isSelected) => {
    if (node) {
      node.style.setProperty('background-color', colorHex, 'important');
      node.style.setProperty('border', `3px solid ${darkerBorderColor}`, 'important');
    }
  };

  const isLightColor = colorHex => {
    const color = new Values(colorHex);
    return color.getBrightness() > 50;
  };

  if (!product) return null;

  return (
    <Layout domainInfo={product}>
      <main className="md:ne-grid ne-grid-cols-2 container ne-mt-2 ne-gap-4">
        <div className="ne-col-span-1 ne-py-6">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            renderItem={renderItem}
            renderThumbInner={renderThumbInner}
            onSlide={setCurrentIndex}
            additionalclassName="custom-image-gallery"
            showNav={true}
          />
        </div>
        <div className="ne-py-6">
          <div>
            <div className="ne-flex ne-items-center ne-gap-2 ne-flex-wrap ne-mb-4">
              {product.offerPrice && (
                <Badge className="ne-rounded-none">
                  <span className="ne-font-semibold ne-text-center ne-uppercase">91.67% off</span>
                </Badge>
              )}
              {product.labels &&
                !!product.labels.length &&
                product.labels.map((label, index) => (
                  <Badge key={index} className={cn('ne-rounded-none', label.toLowerCase() === 'hot' && 'ne-bg-red-600')}>
                    {label}
                  </Badge>
                ))}
            </div>
            <h1 className="ne-text-xl">{product.title}</h1>
            <div className="ne-flex ne-items-center ne-mt-2">
              <h1 className="ne-text-lg">৳{product.offerPrice || product.price}</h1>
              {product.offerPrice && (
                <p className="ne-ml-2 ne-line-through ne-text-red-600">
                  <span className="ne-text-neutral-500">{product.price}</span>
                </p>
              )}
            </div>
          </div>
          <div className="ne-flex ne-items-center ne-gap-2 ne-flex-wrap">
            <div className="ne-mt-2 ne-py-1 ne-px-4 ne-bg-primary ne-text-primary-foreground ne-rounded-md ne-flex ne-items-center ne-gap-2">
              <Check />
              <p className="ne-font-semibold ne-text-primary-foreground">In stock</p>
            </div>
            <div className="ne-mt-2 ne-py-1 ne-px-4 ne-bg-primary/10 ne-rounded-md ne-flex ne-items-center ne-gap-2">
              <Truck />
              <p className="ne-font-semibold ne-text-neutral-800">ক্যাশ অন ডেলিভারি</p>
            </div>
          </div>
          <div className="ne-mt-6 ne-space-y-4">
            {product.variants &&
              product.variants.map(variant => (
                <div key={variant.title}>
                  <h1 className="ne-text-base [border-bottom:1px_solid_hsl(var(--border))] ne-mb-4 ne-flex ne-items-center ne-justify-between">
                    <span className="[border-bottom:2px_solid_hsl(var(--foreground))] ne-pb-2 ne-inline-block">{variant.title}</span>
                    {selectedVariants[variant.title]}
                  </h1>
                  <ToggleGroup
                    type="single"
                    value={selectedVariants[variant.title]}
                    onValueChange={value => setSelectedVariants(prev => ({ ...prev, [variant.title]: value }))}
                    className={variant.type === 'color' ? 'ne-rounded-full' : ''}
                  >
                    {variant.options.map(option => {
                      const colorHex = option.hex || option;
                      const darkerBorderColor = variant.type === 'color' ? new Values(colorHex).shade(35).rgbString() : '';
                      const isSelected = selectedVariants[variant.title] === (option.name || option);

                      const checkmarkColor = variant.type === 'color' && isLightColor(colorHex) ? '#000000' : '#ffffff';

                      return (
                        <ToggleGroupItem
                          key={option.name || option}
                          value={option.name || option}
                          variant="outline"
                          className={`
                            ${variant.type === 'color' ? 'ne-w-8 ne-h-8 ne-rounded-full ne-p-0 ne-overflow-hidden ne-flex ne-items-center ne-justify-center' : ''}
                          `}
                          ref={node => {
                            if (variant.type === 'color') applyColorStyles(node, colorHex, darkerBorderColor, isSelected);
                          }}
                        >
                          {variant.type === 'color' ? isSelected && <Check className="ne-w-4 ne-h-4" style={{ color: checkmarkColor }} /> : option.name || option}
                        </ToggleGroupItem>
                      );
                    })}
                  </ToggleGroup>
                </div>
              ))}
          </div>
          <div className="ne-mt-8 ne-flex ne-items-center ne-gap-2">
            <CartInput className="ne-border ne-border-primary ne-min-w-40" />
            <Button className="ne-min-w-0">Add To Cart</Button>
          </div>
          <Button className="ne-mt-2 [border:1px_solid_hsl(var(--primary))] ne-text-primary" variant="outline">
            Buy It Now
          </Button>
          <p className="ne-flex ne-items-center ne-justify-center ne-mt-2 ne-text-foreground ne-gap-1">
            <Truck className="ne-w-4 ne-h-4" />
            Shipping calculated at checkout
          </p>
          <div>
            <h1 className="ne-text-base ne-border-b ne-mb-4 ne-mt-8 [border-bottom:1px_solid_hsl(var(--border))]">
              <span className="[border-bottom:2px_solid_hsl(var(--foreground))] ne-pb-2 ne-inline-block">Description</span>
            </h1>
            <div>
              {description.length < 400 ? (
                description.split('\n').map((str, i) => (
                  <p className="ne-text-foreground" key={i}>
                    {str}
                  </p>
                ))
              ) : (
                <>
                  {(description.slice(0, 400 - 3) + '...').split('\n').map((str, i, arr) => (
                    <p className="ne-text-foreground" key={i}>
                      {str}
                      {i === arr.length - 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <a href="#" className="ne-underline">
                              View more
                            </a>
                          </DialogTrigger>
                          <DialogContent className="ne-max-h-[calc(100vh-6rem)] ne-overflow-y-auto">
                            <div>
                              {description.split('\n').map((str, i) => (
                                <p className="ne-text-foreground" key={i}>
                                  {str}
                                </p>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </p>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

     
    </Layout>
  );
};
