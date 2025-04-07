import { Collapsible } from '@/theme_2/components/collapsible/collapsible';
import { LoadMore } from '@/theme_2/components/loadMore/loadMore';
import { ProductCard } from '@/theme_2/components/productCard/productCard';
import { Title } from '@/theme_2/components/title/title';
import { Button } from '@/theme_2/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/theme_2/components/ui/sheet';
import { Layout } from '@/theme_2/layout';
import { cn } from '@/theme_2/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/theme_2/components/ui/tooltip';
import { Maximize } from 'lucide-react';
import { Minimize } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useBreakpoint } from '@/theme_2/hooks/useBreakpoint';
import { Checkbox } from '@/theme_2/components/ui/checkbox';
import { RangeSlider } from '@/theme_2/components/rangeSlider/rangeSlider';
import { useFetchCategories } from '../../../../hooks';
import Products from '@/theme_2/components/Products/Products';

export const ShopPage = ({ domainInfo  ,allProducts}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stockFilter, setStockFilter] = useState(null);
  const [timer, setTimer] = useState(null);
  const [initLayout, setInitLayout] = useState(false);
  const breakpoint = useBreakpoint();
  const { loading, error, categories } = useFetchCategories(
    domainInfo?.shop_id
  );

  const [layout, setLayout] = useState(breakpoint === 'sm' || breakpoint === 'md' ? 'wide' : 'compact');

  useEffect(() => {
    if (initLayout) return;
    setInitLayout(true);
    setLayout(breakpoint === 'sm' || breakpoint === 'md' ? 'wide' : 'compact');
  }, [breakpoint]);

  const loadMore = () => {
    if (timer) clearTimeout(timer);
    setIsLoading(true);
    setTimer(
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    );
  };

  const handleStockChange = (value) => {
    setStockFilter(value);
  };

  const Filters = () => (
    <>
      <Collapsible title="Layout" className="ne-my-4 ne-mb-2">
        <div className="ne-py-1 ne-flex ne-items-center ne-gap-4">
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button size="icon" className="max-md:ne-hidden" variant={layout === 'compact' ? 'default' : 'secondary'} onClick={() => setLayout('compact')}>
                  <Minimize className="ne-w-5 ne-h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="ne-text-sm ne-text-primary-foreground">Compact</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className={layout === 'wide' && 'ne-bg-primary ne-text-primary-foreground hover:ne-bg-primary/90'}
                  variant={layout === 'wide' ? 'default' : 'secondary'}
                  onClick={() => setLayout('wide')}
                >
                  <Maximize className="ne-w-5 ne-h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="ne-text-sm ne-text-primary-foreground">Wide</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button size="icon" variant={layout === 'list' ? 'default' : 'secondary'} onClick={() => setLayout('list')}>
                  <AlignJustify className="ne-w-5 ne-h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="ne-text-sm ne-text-primary-foreground">List</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Collapsible>
      <Collapsible title="Categories" className="ne-my-4 ne-mb-2">
        <div className="ne-py-1">
          <ul className="ne-flex ne-flex-col ne-gap-4">
            {categories.map(({ name , id, shop_id}, index) => (
              <li key={index}>
                <Link  href={`/shop?category=${name
                  .split(" ")
                  .join("-")}&shop=${shop_id}&id=${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Collapsible>
      <Collapsible title="Avaibility" className="ne-my-4 ne-mb-2">
        <div className="ne-py-1 ne-space-y-4">
          <div className="ne-items-center ne-flex ne-space-x-2">
            <Checkbox id="instock" />
            <div>
              <label htmlFor="instock" className="ne-text-sm ne-font-medium ne-leading-none peer-disabled:ne-cursor-not-allowed peer-disabled:ne-opacity-70">
                In Stock (50)
              </label>
            </div>
          </div>
          <div className="ne-items-center ne-flex ne-space-x-2">
            <Checkbox id="out" disabled />
            <div>
              <label htmlFor="out" className="ne-text-sm ne-font-medium ne-leading-none peer-disabled:ne-cursor-not-allowed peer-disabled:ne-opacity-70">
                Out of Stock
              </label>
            </div>
          </div>
        </div>
      </Collapsible>
      <Collapsible title="Price" className="ne-my-4 ne-mb-2">
        <div className="ne-py-1 ne-space-y-4">
          <RangeSlider />
        </div>
      </Collapsible>
    </>
  );
  // console.log( "allProducts",allProducts);
  return (
    <Layout domainInfo={domainInfo} categories={categories}>
      <div className="md:ne-hidden ne-z-50 ne-bg-white ne-sticky ne-top-14">
        <div className="ne-bg-primary/10">
          <div className="container ne-flex ne-items-center ne-justify-between ">
            <div>
              <Sheet>
                <SheetTrigger asChild>
                  <a href="#" className="ne-flex ne-items-center ne-gap-1">
                    Filters
                    <ChevronDown className="ne-w-4 ne-h-4" />
                  </a>
                </SheetTrigger>
                <SheetContent side="left">
                  <Filters />
                </SheetContent>
              </Sheet>
            </div>

            <div className="ne-py-2 ne-flex ne-items-center ne-gap-4">
              <TooltipProvider>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button size="icon" className="ne-w-8 ne-h-8" variant={layout === 'list' ? 'default' : 'secondary'} onClick={() => setLayout('list')}>
                      <AlignJustify className="ne-w-5 ne-h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="ne-text-sm ne-text-primary-foreground">List</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className={layout === 'wide' ? 'ne-bg-primary ne-text-primary-foreground hover:ne-bg-primary/90 ne-w-8 ne-h-8' : 'ne-h-8 ne-w-8'}
                      variant={layout === 'wide' ? 'default' : 'secondary'}
                      onClick={() => setLayout('wide')}
                    >
                      <Maximize className="ne-w-5 ne-h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="ne-text-sm ne-text-primary-foreground">Default</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button size="icon" className="ne-w-8 ne-h-8 max-md:ne-hidden" variant={layout === 'compact' ? 'default' : 'secondary'} onClick={() => setLayout('compact')}>
                      <Minimize className="ne-w-5 ne-h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="ne-text-sm ne-text-primary-foreground">Compact</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
      <main className="md:ne-grid lg:ne-grid-cols-5 ne-grid-cols-6 container ne-mt-2 ne-gap-4">
        <section className="ne-pb-6 ne-pt-4 ne-hidden md:ne-block max-lg:ne-col-span-2">
          <Filters />
        </section>

        <section className="ne-py-6 ne-col-span-4">
          <Title>All Products</Title>

          <div className={cn('ne-grid ne-my-4 ne-mt-8 ne-gap-4', layout === 'wide' && 'md:ne-grid-cols-2 lg:ne-grid-cols-3', layout === 'compact' && 'md:ne-grid-cols-3 lg:ne-grid-cols-4')}>
            {allProducts.map((product, index) => (
              <ProductCard key={index} product={product} variant={layout === 'list' && 'list'} />
            ))}
            {/* <Products domainInfo={domainInfo} /> */}
          </div>
          <div className="ne-mt-6 ne-flex ne-items-center ne-justify-center">
            <LoadMore isLoading={isLoading} onClick={loadMore} />
          </div>
        </section>
      </main>
    </Layout>
  );
};
