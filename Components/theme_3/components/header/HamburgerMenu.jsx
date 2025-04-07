import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { categories } from '@/theme_3/constant';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = category.submenu && category.submenu.length > 0;

  return (
    <div>
      {hasSubmenu ? (
        <>
          <button
            className="ne-flex ne-items-center ne-justify-between ne-w-full ne-py-4 ne-px-4 ne-text-left ne-text-white ne-no-underline hover:ne-text-white hover:ne-bg-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{category.title}</span>
            <ChevronDown className={`ne-w-5 ne-h-5 ne-transition-transform ${isOpen ? 'ne-transform ne-rotate-180' : ''}`} />
          </button>
          {isOpen && (
            <ul className="ne-pb-4 ne-w-full">
              {category.submenu.map((item, subIndex) => (
                <li key={subIndex} className="ne-flex ne-items-center ne-w-full">
                  <Link href="#" className="ne-py-2 ne-px-2 ne-text-sm ne-text-white ne-no-underline hover:ne-text-white hover:ne-bg-black ne-w-full ne-pl-8 ne-flex ne-items-center ne-gap-2">
                    <span className="ne-w-1.5 ne-h-1.5 ne-border ne-border-neutral-700 ne-rounded-full"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link href="#" className="ne-block ne-py-4 ne-px-4 ne-text-left ne-text-white ne-no-underline hover:ne-text-white hover:ne-bg-black">
          {category.title}
        </Link>
      )}
    </div>
  );
};

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="link" className="ne-py-0 ne-px-2 hover:ne-bg-transparent active:ne-bg-transparent focus:ne-bg-transparent ne-text-white">
          <svg className="ne-w-8 ne-h-8" viewBox="0 0 100 100" fill="none">
            <path
              d="M77.7791 66.6666C80.8471 66.6666 83.3346 69.1541 83.3346 72.2222C83.3346 75.2902 80.8471 77.7777 77.7791 77.7777C76.1096 77.7777 23.893 77.7777 22.2235 77.7777C19.1555 77.7777 16.668 75.2902 16.668 72.2222C16.668 69.1541 19.1555 66.6666 22.2235 66.6666C23.893 66.6666 76.1096 66.6666 77.7791 66.6666ZM51.7791 44.4444C54.8471 44.4444 57.3346 46.9319 57.3346 49.9999C57.3346 53.068 54.8471 55.5555 51.7791 55.5555C50.1096 55.5555 23.893 55.5555 22.2235 55.5555C19.1555 55.5555 16.668 53.068 16.668 49.9999C16.668 46.9319 19.1555 44.4444 22.2235 44.4444C23.893 44.4444 50.1096 44.4444 51.7791 44.4444ZM77.7791 22.2222C80.8471 22.2222 83.3346 24.7097 83.3346 27.7777C83.3346 30.8458 80.8471 33.3333 77.7791 33.3333C76.1096 33.3333 23.893 33.3333 22.2235 33.3333C19.1555 33.3333 16.668 30.8458 16.668 27.7777C16.668 24.7097 19.1555 22.2222 22.2235 22.2222C23.893 22.2222 76.1096 22.2222 77.7791 22.2222Z"
              fill="currentColor"
            />
          </svg>
          <span className="ne-sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby="category-sheet" className="ne-max-h-screen ne-overflow-y-auto ne-flex ne-flex-col ne-p-0 ne-bg-black ne-gap-0 ne-border-r-0" side="left" noclose>
        <SheetHeader className="ne-py-4 ne-bg-primary/70">
          <SheetTitle className="ne-flex ne-items-center ne-justify-center">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='35' height='10' viewBox='0 0 35 10' fill='none'%3E%3Cpath d='M0.875 8.29212V1.30812C0.875 0.836117 1.111 0.600117 1.583 0.600117H4.067C4.811 0.600117 5.427 0.832117 5.915 1.29612C6.403 1.76012 6.647 2.31612 6.647 2.96412C6.647 3.51612 6.499 3.97212 6.203 4.33212C6.771 4.92412 7.055 5.61212 7.055 6.39612C7.055 7.14812 6.779 7.77212 6.227 8.26812C5.683 8.75612 5.003 9.00012 4.187 9.00012H1.583C1.111 9.00012 0.875 8.76412 0.875 8.29212ZM2.999 5.48412V7.10412H4.331C4.731 7.10412 4.931 6.83612 4.931 6.30012C4.931 6.06812 4.883 5.87612 4.787 5.72412C4.691 5.56412 4.539 5.48412 4.331 5.48412H2.999ZM2.999 3.74412H4.055C4.215 3.74412 4.331 3.68412 4.403 3.56412C4.483 3.43612 4.523 3.28812 4.523 3.12012C4.523 2.95212 4.483 2.80812 4.403 2.68812C4.331 2.56012 4.215 2.49612 4.055 2.49612H2.999V3.74412Z' fill='%23D3FB51'/%3E%3Cpath d='M8.35878 3.22812C8.35878 2.75612 8.59478 2.52012 9.06678 2.52012H9.60678C10.0788 2.52012 10.3148 2.75612 10.3148 3.22812V8.29212C10.3148 8.76412 10.0788 9.00012 9.60678 9.00012H9.06678C8.59478 9.00012 8.35878 8.76412 8.35878 8.29212V3.22812ZM8.35878 1.15212V0.828117C8.35878 0.356117 8.59478 0.120117 9.06678 0.120117H9.60678C10.0788 0.120117 10.3148 0.356117 10.3148 0.828117V1.15212C10.3148 1.62412 10.0788 1.86012 9.60678 1.86012H9.06678C8.59478 1.86012 8.35878 1.62412 8.35878 1.15212Z' fill='%23D3FB51'/%3E%3Cpath d='M12.4789 8.26812C11.9669 7.69212 11.7109 6.85612 11.7109 5.76012C11.7109 4.66412 11.9669 3.83212 12.4789 3.26412C12.9909 2.68812 13.7029 2.40012 14.6149 2.40012C15.5269 2.40012 16.2389 2.68812 16.7509 3.26412C17.2629 3.83212 17.5189 4.66412 17.5189 5.76012C17.5189 6.85612 17.2629 7.69212 16.7509 8.26812C16.2389 8.83612 15.5269 9.12012 14.6149 9.12012C13.7029 9.12012 12.9909 8.83612 12.4789 8.26812ZM15.2989 4.57212C15.1309 4.28412 14.9029 4.14012 14.6149 4.14012C14.3269 4.14012 14.0949 4.28412 13.9189 4.57212C13.7509 4.86012 13.6669 5.25612 13.6669 5.76012C13.6669 6.26412 13.7509 6.66012 13.9189 6.94812C14.0949 7.23612 14.3269 7.38012 14.6149 7.38012C14.9029 7.38012 15.1309 7.23612 15.2989 6.94812C15.4749 6.66012 15.5629 6.26412 15.5629 5.76012C15.5629 5.25612 15.4749 4.86012 15.2989 4.57212Z' fill='%23D3FB51'/%3E%3Cpath d='M18.925 9.00012C18.453 9.00012 18.333 8.79612 18.565 8.38812L20.113 5.67612L18.661 3.13212C18.429 2.72412 18.549 2.52012 19.021 2.52012H19.957C20.341 2.52012 20.617 2.69212 20.785 3.03612L21.241 3.94812L21.697 3.03612C21.865 2.69212 22.141 2.52012 22.525 2.52012H23.461C23.933 2.52012 24.053 2.72412 23.821 3.13212L22.369 5.67612L23.917 8.38812C24.149 8.79612 24.029 9.00012 23.557 9.00012H22.645C22.261 9.00012 21.981 8.82812 21.805 8.48412L21.241 7.36812L20.677 8.48412C20.501 8.82812 20.221 9.00012 19.837 9.00012H18.925Z' fill='%23D3FB51'/%3E%3Cpath d='M25.2221 3.22812C25.2221 2.75612 25.4581 2.52012 25.9301 2.52012H26.4701C26.9421 2.52012 27.1781 2.75612 27.1781 3.22812V8.29212C27.1781 8.76412 26.9421 9.00012 26.4701 9.00012H25.9301C25.4581 9.00012 25.2221 8.76412 25.2221 8.29212V3.22812ZM25.2221 1.15212V0.828117C25.2221 0.356117 25.4581 0.120117 25.9301 0.120117H26.4701C26.9421 0.120117 27.1781 0.356117 27.1781 0.828117V1.15212C27.1781 1.62412 26.9421 1.86012 26.4701 1.86012H25.9301C25.4581 1.86012 25.2221 1.62412 25.2221 1.15212Z' fill='%23D3FB51'/%3E%3Cpath d='M28.7182 3.22812C28.7182 2.75612 28.9542 2.52012 29.4262 2.52012H29.9662C30.4382 2.52012 30.6742 2.75612 30.6742 3.22812V3.24012C30.7942 2.98412 30.9822 2.78012 31.2382 2.62812C31.4942 2.47612 31.7582 2.40012 32.0302 2.40012C32.6862 2.40012 33.2142 2.61612 33.6142 3.04812C34.0142 3.47212 34.2142 4.06012 34.2142 4.81212V8.29212C34.2142 8.76412 33.9782 9.00012 33.5062 9.00012H32.9662C32.4942 9.00012 32.2582 8.76412 32.2582 8.29212V4.88412C32.2582 4.38812 31.9942 4.14012 31.4662 4.14012C30.9382 4.14012 30.6742 4.38812 30.6742 4.88412V8.29212C30.6742 8.76412 30.4382 9.00012 29.9662 9.00012H29.4262C28.9542 9.00012 28.7182 8.76412 28.7182 8.29212V3.22812Z' fill='%23D3FB51'/%3E%3C/svg%3E"
              width="85"
              height="15"
              alt="ICECREAM"
            />
          </SheetTitle>
        </SheetHeader>
        <div className="ne-bg-primary ne-text-primary-foreground ne-h-full">
          <nav className="ne-flex-1 ne-overflow-y-auto ne-bg-primary">
            <ul className="ne-flex ne-flex-col">
              <li>
                <Link href="/" className="ne-block ne-py-4 ne-text-white ne-no-underline hover:ne-text-white ne-px-4 hover:ne-bg-black" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="ne-block ne-py-4 ne-text-white ne-no-underline hover:ne-text-white ne-px-4 hover:ne-bg-black" onClick={() => setOpen(false)}>
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about_us" className="ne-block ne-py-4 ne-text-white ne-no-underline hover:ne-text-white ne-px-4 hover:ne-bg-black" onClick={() => setOpen(false)}>
                  About Us
                </Link>
              </li>
            </ul>
            <div className="ne-w-full">
              {categories.map((category, index) => (
                <AccordionItem key={index} category={category} />
              ))}
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
