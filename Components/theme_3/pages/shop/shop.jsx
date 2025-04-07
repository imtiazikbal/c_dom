import { Collapsible } from '@/theme_3/components/collapsible/collapsible';
import { LoadMore } from '@/theme_3/components/loadMore/loadMore';
import { ProductCard } from '@/theme_3/components/productCard/productCard';
import { Title } from '@/theme_3/components/title/title';
import { Button } from '@/theme_3/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/theme_3/components/ui/sheet';
import { categories, products } from '@/theme_3/constant';
import { Layout } from '@/theme_3/layout';
import { cn } from '@/theme_3/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/theme_3/components/ui/tooltip';
import { Maximize } from 'lucide-react';
import { Minimize } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export const ShopPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const [layout, setLayout] = useState('default');

  const loadMore = () => {
    if (timer) clearTimeout(timer);
    setIsLoading(true);
    setTimer(
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    );
  };

  const Filters = () => (
    <>
      <Collapsible title="Layout" className="ne-my-4 ne-mb-2">
        <div className="ne-py-1 ne-flex ne-items-center ne-gap-4">
          <TooltipProvider>
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

            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  className={layout === 'default' && 'ne-bg-primary ne-text-primary-foreground hover:ne-bg-primary/90'}
                  variant={layout === 'default' ? 'default' : 'secondary'}
                  onClick={() => setLayout('default')}
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
                <Button size="icon" className="max-md:ne-hidden" variant={layout === 'compact' ? 'default' : 'secondary'} onClick={() => setLayout('compact')}>
                  <Minimize className="ne-w-5 ne-h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="ne-text-sm ne-text-primary-foreground">Compact</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Collapsible>
      <Collapsible title="Categories" className="ne-my-4 ne-mb-2">
        <div className="ne-py-1">
          <ul className="ne-flex ne-flex-col ne-gap-4">
            {categories.map((category, index) => (
              <li key={index}>
                <>
                  <span>{category.title}</span>
                  {category.submenu && (
                    <ul className="ne-ml-4 ne-mt-2 ne-flex ne-flex-col ne-gap-2">
                      {category.submenu.map((item, subIndex) => (
                        <li key={subIndex}>
                          <Link href="#">{item}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              </li>
            ))}
          </ul>
        </div>
      </Collapsible>
    </>
  );
  return (
    <Layout>
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
                      className={layout === 'default' ? 'ne-bg-primary ne-text-primary-foreground hover:ne-bg-primary/90 ne-w-8 ne-h-8' : 'ne-h-8 ne-w-8'}
                      variant={layout === 'default' ? 'default' : 'secondary'}
                      onClick={() => setLayout('default')}
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
      <main className="md:ne-grid ne-grid-cols-5 container ne-mt-2 ne-gap-4">
        <section className="ne-pb-6 ne-pt-4 ne-hidden md:ne-block">
          <Filters />
        </section>

        <section className="ne-py-6 ne-col-span-4">
          <Title>All Products</Title>

          <div className={cn('ne-grid ne-my-4 ne-mt-8 ne-gap-4', layout === 'default' && 'md:ne-grid-cols-2 lg:ne-grid-cols-3', layout === 'compact' && 'md:ne-grid-cols-3 lg:ne-grid-cols-5')}>
            {[...products, ...products, ...products].map(({ title, href, image, price, offerPrice }, index) => (
              <ProductCard key={index} title={title} href={href} image={image} price={price} offerPrice={offerPrice} variant={layout === 'list' && 'list'} />
            ))}
          </div>
          <div className="ne-mt-6 ne-flex ne-items-center ne-justify-center">
            <LoadMore isLoading={isLoading} onClick={loadMore} />
          </div>
        </section>
      </main>
    </Layout>
  );
};
