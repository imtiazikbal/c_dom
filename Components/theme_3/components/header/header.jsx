import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Cart } from '../cart/cart';
import { Menu } from 'lucide-react';
import { categories } from '@/theme_3/constant';

import searchIcon from '@/theme_3/assets/images/Search-w.webp';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu';
import { cn } from '@/theme_3/lib/utils';
import { ArrowLeft } from 'lucide-react';
import { Input } from '../ui/input';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  const [search, setSearch] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  return (
    <div className="ne-sticky ne-top-0 ne-z-50 ne-bg-primary">
      <header className="container max-lg:ne-pb-2">
        <div className="ne-relative">
          <div className="ne-py-2 ne-flex ne-items-center ne-justify-between">
            <div className="lg:ne-hidden">
              <HamburgerMenu />
            </div>
            <Link href="/">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='10' viewBox='0 0 35 10' fill='none'%3E%3Cpath d='M0.875 8.29212V1.30812C0.875 0.836117 1.111 0.600117 1.583 0.600117H4.067C4.811 0.600117 5.427 0.832117 5.915 1.29612C6.403 1.76012 6.647 2.31612 6.647 2.96412C6.647 3.51612 6.499 3.97212 6.203 4.33212C6.771 4.92412 7.055 5.61212 7.055 6.39612C7.055 7.14812 6.779 7.77212 6.227 8.26812C5.683 8.75612 5.003 9.00012 4.187 9.00012H1.583C1.111 9.00012 0.875 8.76412 0.875 8.29212ZM2.999 5.48412V7.10412H4.331C4.731 7.10412 4.931 6.83612 4.931 6.30012C4.931 6.06812 4.883 5.87612 4.787 5.72412C4.691 5.56412 4.539 5.48412 4.331 5.48412H2.999ZM2.999 3.74412H4.055C4.215 3.74412 4.331 3.68412 4.403 3.56412C4.483 3.43612 4.523 3.28812 4.523 3.12012C4.523 2.95212 4.483 2.80812 4.403 2.68812C4.331 2.56012 4.215 2.49612 4.055 2.49612H2.999V3.74412Z' fill='%23D3FB51'/%3E%3Cpath d='M8.35878 3.22812C8.35878 2.75612 8.59478 2.52012 9.06678 2.52012H9.60678C10.0788 2.52012 10.3148 2.75612 10.3148 3.22812V8.29212C10.3148 8.76412 10.0788 9.00012 9.60678 9.00012H9.06678C8.59478 9.00012 8.35878 8.76412 8.35878 8.29212V3.22812ZM8.35878 1.15212V0.828117C8.35878 0.356117 8.59478 0.120117 9.06678 0.120117H9.60678C10.0788 0.120117 10.3148 0.356117 10.3148 0.828117V1.15212C10.3148 1.62412 10.0788 1.86012 9.60678 1.86012H9.06678C8.59478 1.86012 8.35878 1.62412 8.35878 1.15212Z' fill='%23D3FB51'/%3E%3Cpath d='M12.4789 8.26812C11.9669 7.69212 11.7109 6.85612 11.7109 5.76012C11.7109 4.66412 11.9669 3.83212 12.4789 3.26412C12.9909 2.68812 13.7029 2.40012 14.6149 2.40012C15.5269 2.40012 16.2389 2.68812 16.7509 3.26412C17.2629 3.83212 17.5189 4.66412 17.5189 5.76012C17.5189 6.85612 17.2629 7.69212 16.7509 8.26812C16.2389 8.83612 15.5269 9.12012 14.6149 9.12012C13.7029 9.12012 12.9909 8.83612 12.4789 8.26812ZM15.2989 4.57212C15.1309 4.28412 14.9029 4.14012 14.6149 4.14012C14.3269 4.14012 14.0949 4.28412 13.9189 4.57212C13.7509 4.86012 13.6669 5.25612 13.6669 5.76012C13.6669 6.26412 13.7509 6.66012 13.9189 6.94812C14.0949 7.23612 14.3269 7.38012 14.6149 7.38012C14.9029 7.38012 15.1309 7.23612 15.2989 6.94812C15.4749 6.66012 15.5629 6.26412 15.5629 5.76012C15.5629 5.25612 15.4749 4.86012 15.2989 4.57212Z' fill='%23D3FB51'/%3E%3Cpath d='M18.925 9.00012C18.453 9.00012 18.333 8.79612 18.565 8.38812L20.113 5.67612L18.661 3.13212C18.429 2.72412 18.549 2.52012 19.021 2.52012H19.957C20.341 2.52012 20.617 2.69212 20.785 3.03612L21.241 3.94812L21.697 3.03612C21.865 2.69212 22.141 2.52012 22.525 2.52012H23.461C23.933 2.52012 24.053 2.72412 23.821 3.13212L22.369 5.67612L23.917 8.38812C24.149 8.79612 24.029 9.00012 23.557 9.00012H22.645C22.261 9.00012 21.981 8.82812 21.805 8.48412L21.241 7.36812L20.677 8.48412C20.501 8.82812 20.221 9.00012 19.837 9.00012H18.925Z' fill='%23D3FB51'/%3E%3Cpath d='M25.2221 3.22812C25.2221 2.75612 25.4581 2.52012 25.9301 2.52012H26.4701C26.9421 2.52012 27.1781 2.75612 27.1781 3.22812V8.29212C27.1781 8.76412 26.9421 9.00012 26.4701 9.00012H25.9301C25.4581 9.00012 25.2221 8.76412 25.2221 8.29212V3.22812ZM25.2221 1.15212V0.828117C25.2221 0.356117 25.4581 0.120117 25.9301 0.120117H26.4701C26.9421 0.120117 27.1781 0.356117 27.1781 0.828117V1.15212C27.1781 1.62412 26.9421 1.86012 26.4701 1.86012H25.9301C25.4581 1.86012 25.2221 1.62412 25.2221 1.15212Z' fill='%23D3FB51'/%3E%3Cpath d='M28.7182 3.22812C28.7182 2.75612 28.9542 2.52012 29.4262 2.52012H29.9662C30.4382 2.52012 30.6742 2.75612 30.6742 3.22812V3.24012C30.7942 2.98412 30.9822 2.78012 31.2382 2.62812C31.4942 2.47612 31.7582 2.40012 32.0302 2.40012C32.6862 2.40012 33.2142 2.61612 33.6142 3.04812C34.0142 3.47212 34.2142 4.06012 34.2142 4.81212V8.29212C34.2142 8.76412 33.9782 9.00012 33.5062 9.00012H32.9662C32.4942 9.00012 32.2582 8.76412 32.2582 8.29212V4.88412C32.2582 4.38812 31.9942 4.14012 31.4662 4.14012C30.9382 4.14012 30.6742 4.38812 30.6742 4.88412V8.29212C30.6742 8.76412 30.4382 9.00012 29.9662 9.00012H29.4262C28.9542 9.00012 28.7182 8.76412 28.7182 8.29212V3.22812Z' fill='%23D3FB51'/%3E%3C/svg%3E"
                width="85"
                height="15"
                alt="ICECREAM"
              />
            </Link>

            <div className="max-lg:ne-hidden ne-flex ne-justify-start max-lg:ne-pb-[600px] max-lg:ne--mb-[600px] ne-no-scrollbar max-lg:ne-overflow-x-auto max-lg:ne-w-full">
              <NavigationMenu>
                <NavigationMenuList className="ne-space-x-0">
                  {categories.map((category, index) => (
                    <NavigationMenuItem key={index} className="ne-relative">
                      <>
                        <NavigationMenuTrigger className="hover:ne-bg-transparent" noicon>
                          <Link href="#" className="ne-text-white hover:ne-text-white">
                            {category.title}
                          </Link>
                        </NavigationMenuTrigger>
                        {!!category.submenu && (
                          <NavigationMenuContent className="ne-justify-center ne-flex ne-top-full">
                            <div className="ne-w-[900px] ne-flex ne-justify-center">
                              <div className="ne-rounded-md ne-border ne-bg-popover ne-text-popover-foreground ne-shadow-lg ne-flex">
                                <div className="ne-h-full ne-bg-primary/10 ne-flex ne-items-center ne-justify-center">
                                  <div className="ne-p-6">
                                    <h1 className="ne-text-2xl">BIOXIN</h1>
                                    <h1 className="ne-text-2xl">Recommends</h1>

                                    <p>Shop All {category.title} Products</p>
                                    <Button className="ne-mt-2" size="sm">
                                      Shop All
                                    </Button>
                                  </div>
                                </div>
                                <div className="ne-p-4">
                                  <ul className="ne-grid ne-gap-1 ne-p-2 ne-grid-cols-2">
                                    {category.submenu.map((item, subIndex) => (
                                      <li key={subIndex} className="ne-w-full [&>a]:ne-w-full [&>a]:ne-text-left [&>a]:ne-justify-start ne-relative">
                                        <Link href="#" legacyBehavior passHref>
                                          <NavigationMenuLink className={cn('ne-flex ne-items-center ne-gap-2', navigationMenuTriggerStyle(), 'ne-h-auto hover:ne-text-primary')}>
                                            {item}
                                          </NavigationMenuLink>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </NavigationMenuContent>
                        )}
                      </>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <nav>
              <ul className="ne-flex ne-items-center ne-gap-2">
                <div className="ne-flex ne-items-center">
                  <li className="max-lg:ne-hidden">
                    <Button variant="ghost" className="ne-py-0 ne-px-2 ne-text-white hover:ne-bg-transparent" onClick={() => setSearchShow(true)}>
                      <Image src={searchIcon} alt="Search" className="ne-w-7 ne-h-7" />
                      <span className="ne-sr-only">Search</span>
                    </Button>
                  </li>
                  <li>
                    <Cart />
                  </li>
                </div>
              </ul>
            </nav>
          </div>
          <div className="lg:ne-hidden">
            <Button variant="ghost" className="ne-flex ne-items-center ne-py-1 ne-bg-white ne-border ne-rounded-md ne-justify-start ne-w-full ne-px-0 ne-h-auto" onClick={() => setSearchShow(true)}>
              <div className="ne-w-6 ne-h-6 ne-p-1 ne-flex ne-items-center ne-justify-center">
                <Search className="ne-w-5 ne-h-5" />
              </div>
              <p className="ne-flex ne-items-center ne-text-lg ne-ml-4 ne-text-neutral-400">Search Products and More</p>
            </Button>
          </div>
          <div className={cn('ne-absolute ne-inset-0 ne-overflow-hidden', !searchShow && 'ne-pointer-events-none')}>
            <div className={cn('ne-absolute ne-inset-0 ne-bg-white ne-flex ne-items-center ne-border-y ne-transition-transform', !searchShow && '-ne-translate-y-[calc(100%+1px)] ne-pointer-events-none')}>
              <Button variant="ghost" size="icon" onClick={() => setSearchShow(false)}>
                <ArrowLeft />
              </Button>
              <Input className="ne-w-full ne-border-none focus:ne-ring-0 active:ne-ring-0 ne-border" placeholder="Search products & more" />
              <Button size="icon" className="ne-rounded-l-none">
                <Search className="ne-w-4 ne-h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
