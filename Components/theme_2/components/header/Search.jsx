import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/theme_2/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Cart } from "../cart/cart";
import { Categories } from "./categories";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Menu } from "lucide-react";
import { useRouter } from "next/router";
const HeaderSearch = ({ categories = [], domainInfo }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 || event.key === "Enter") {
      router.push(`/shop?search=${search}`);
    }
  };
  return (
    <div className="ne-flex ne-items-center">
      <li>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="link"
              className="ne-py-0 ne-px-2 hover:ne-bg-primary/10"
            >
              <Search className="ne-w-5 ne-h-5" />
              <span className="ne-sr-only">Search</span>
            </Button>
          </DialogTrigger>
          <DialogContent aria-describedby="search-dialog">
            <DialogHeader>
              <DialogTitle>
                <figure className="ne-flex ne-items-center ne-justify-center ne-m-0">
                  <Image
                    src={
                      domainInfo?.shop_logo
                        ? domainInfo?.shop_logo
                        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='85' height='31' viewBox='0 0 85 31' fill='none'%3E%3Cpath d='M38.5117 21.444C38.5117 22.62 38.1663 23.5347 37.4757 24.188C36.785 24.8227 35.7863 25.1307 34.4797 25.112L26.8357 25V7.22L34.1437 7.108C35.4503 7.08933 36.4303 7.388 37.0837 8.004C37.7557 8.60133 38.0917 9.50667 38.0917 10.72V13.268C38.0917 14.388 37.7463 15.2 37.0557 15.704C36.365 16.1893 35.3663 16.432 34.0597 16.432L34.3677 15.536C35.7677 15.536 36.8037 15.7787 37.4757 16.264C38.1663 16.7307 38.5117 17.5613 38.5117 18.756V21.444ZM29.3277 16.516V23.348L28.8797 22.928H35.5997C35.8423 22.928 35.9637 22.8067 35.9637 22.564V17.328C35.9637 17.104 35.8423 16.992 35.5997 16.992H28.9077L29.3277 16.516ZM29.3277 8.76V15.368L28.9077 14.92H35.1797C35.4223 14.92 35.5437 14.7987 35.5437 14.556V9.6C35.5437 9.35733 35.4223 9.236 35.1797 9.236H28.9077L29.3277 8.76ZM50.5248 25.14H44.9248C43.6554 25.14 42.7314 24.9067 42.1528 24.44C41.5928 23.9547 41.3128 23.1147 41.3128 21.92V14.192C41.3128 12.9973 41.5554 12.1853 42.0408 11.756C42.5261 11.308 43.3754 11.084 44.5888 11.084H47.4728C48.6861 11.084 49.5541 11.308 50.0768 11.756C50.5994 12.1853 50.8608 12.9973 50.8608 14.192V19.652H43.4128V17.888H48.4528V13.324C48.4528 13.1373 48.3594 13.044 48.1728 13.044H44.0008C43.8141 13.044 43.7208 13.1373 43.7208 13.324V22.872C43.7208 23.0587 43.8141 23.152 44.0008 23.152H50.5248V25.14ZM57.684 25.196H56.004C54.9213 25.196 54.128 24.9813 53.624 24.552C53.12 24.1227 52.868 23.3573 52.868 22.256V20.072C52.868 18.9147 53.1293 18.1213 53.652 17.692C54.1747 17.244 55.0427 17.02 56.256 17.02H60.316V18.784H55.528C55.3413 18.784 55.248 18.8773 55.248 19.064V22.956C55.248 23.1427 55.3413 23.236 55.528 23.236H60.008V13.548C60.008 13.3613 59.9147 13.268 59.728 13.268H53.652V11.28L58.972 11.252C60.204 11.252 61.0813 11.4853 61.604 11.952C62.1453 12.4 62.416 13.2213 62.416 14.416V25H60.288L60.008 23.236L60.176 22.536C60.176 23.432 59.98 24.104 59.588 24.552C59.2147 24.9813 58.58 25.196 57.684 25.196ZM71.6818 11.28V13.156H68.1818L68.4618 12.876V22.704C68.4618 22.8907 68.5551 22.984 68.7418 22.984H71.6818V25H69.6658C68.3965 25 67.4725 24.7573 66.8938 24.272C66.3338 23.7867 66.0538 22.956 66.0538 21.78V12.876L66.3338 13.156H64.4018V11.28H66.3338L66.0538 11.56V7.78H68.4618V11.56L68.1818 11.28H71.6818ZM81.2049 23.124V25H74.3449C73.6355 25 73.0942 24.8507 72.7209 24.552C72.3475 24.2347 72.1609 23.7213 72.1609 23.012L78.5449 13.548C78.6195 13.436 78.6289 13.3427 78.5729 13.268C78.5355 13.1933 78.4609 13.156 78.3489 13.156H72.7489V11.28H78.9649C79.7675 11.28 80.3555 11.4667 80.7289 11.84C81.1022 12.2133 81.2889 12.764 81.2889 13.492L75.0449 22.704C74.9702 22.7973 74.9515 22.8907 74.9889 22.984C75.0262 23.0773 75.1009 23.124 75.2129 23.124H81.2049Z' fill='black'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.8846 21.46C18.8846 22.1182 18.3505 22.6523 17.6923 22.6523H17.1295C17.4831 21.6615 17.6923 20.5545 17.6923 19.3735C17.6923 18.4238 17.5528 17.5242 17.3179 16.6908H17.6923C18.3505 16.6908 18.8846 17.225 18.8846 17.8831V21.46ZM15.8281 22.6523H15.3077C14.6495 22.6523 14.1154 22.1182 14.1154 21.46V17.8831C14.1154 17.225 14.6495 16.6908 15.3077 16.6908H16.0577C16.3349 17.5171 16.5 18.4179 16.5 19.3735C16.5 20.5658 16.2484 21.6764 15.8281 22.6523ZM3.75959 16.6908C3.52411 17.5242 3.38462 18.4238 3.38462 19.3735C3.38462 20.5545 3.59446 21.6615 3.94738 22.6523H3.38462C2.72646 22.6523 2.19231 22.1182 2.19231 21.46V17.8831C2.19231 17.225 2.72646 16.6908 3.38462 16.6908H3.75959ZM5.01927 16.6908H5.76923C6.42738 16.6908 6.96154 17.225 6.96154 17.8831V21.46C6.96154 22.1182 6.42738 22.6523 5.76923 22.6523H5.2488C4.82851 21.6764 4.57692 20.5658 4.57692 19.3735C4.57692 18.4179 4.74206 17.5171 5.01927 16.6908ZM18.8476 15.8091C18.8643 15.6076 18.8846 15.4067 18.8846 15.2004C18.8846 10.7555 15.1479 7.15234 10.5385 7.15234C5.929 7.15234 2.19231 10.7555 2.19231 15.2004C2.19231 15.4067 2.21257 15.6076 2.22986 15.8091C1.49957 16.2169 1 16.9877 1 17.8831V21.46C1 22.7769 2.06771 23.8447 3.38462 23.8447C3.38462 23.8447 5.77162 23.8482 5.76923 23.8447C7.03606 23.788 8.15385 22.7406 8.15385 21.46V17.8831C8.15385 16.5662 7.08613 15.4985 5.76923 15.4985H3.38462C3.38462 11.5263 6.58775 8.34465 10.5385 8.34465C14.4898 8.34465 17.6923 11.2461 17.6923 15.4985H15.3077C13.9908 15.4985 12.9231 16.5662 12.9231 17.8831V21.46C12.9231 22.7406 14.0409 23.788 15.3077 23.8447C15.3053 23.8482 16.5 23.8447 16.5 23.8447V25.6331C16.5 25.9628 16.7665 26.2293 17.0962 26.2293C17.4258 26.2293 17.6923 25.9628 17.6923 25.6331V23.8447C19.0092 23.8447 20.0769 22.7769 20.0769 21.46V17.8831C20.0769 16.9877 19.5773 16.2169 18.8476 15.8091Z' fill='black' stroke='black' stroke-width='0.5'/%3E%3C/svg%3E"
                    }
                    width="85"
                    height="15"
                    alt="ICECREAM"
                  />
                </figure>
              </DialogTitle>
            </DialogHeader>
            <div className="ne-relative ne-flex ne-items-center ne-w-full group">
              <span className="ne-absolute ne-left-1 ne-w-4 ne-h-4 ne-flex ne-items-center ne-justify-center">
                <Search />
              </span>
              <Input
                autoComplete="off"
                placeholder="Search"
                value={search}
                onInput={(e) => setSearch(e.target.value)}
                className="ne-pl-6"
                onKeyDown={handleKeyDown}
              />
              <Button
                variant="ghost"
                className={cn(
                  "ne-absolute ne-right-1 ne-w-4 ne-h-4 ne-flex ne-items-center ne-justify-center ne-transition-transform ne-p-0",
                  search.length > 0
                    ? "ne-scale-100 group-hover:ne-scale-100 group-focus-within:ne-scale-100 group-focus:ne-scale-100"
                    : "ne-scale-0"
                )}
                onClick={() => router.push(`/shop?search=${search}`)}
              >
                <ArrowRight />
              </Button>
            </div>

            {/* <div className="ne-mt-4 ne-flex ne-items-center ne-gap-2 max-md:ne-flex-col">
                      Popular Searches:
                      <ul className="ne-flex ne-items-center ne-justify-center ne-gap-2 ne-flex-wrap">
                        <li>
                          <a href="#">Vanilla Bean</a>
                        </li>
                        <li>
                          <a href="#">Chocolate Peanut</a>
                        </li>
                      </ul>
                    </div> */}
          </DialogContent>
        </Dialog>
      </li>
      <li>
        <Cart />
      </li>
      <li>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="link"
              className="ne-py-0 ne-px-2 hover:ne-bg-primary/10 md:ne-hidden"
            >
              <Menu className="ne-w-5 ne-h-5" />
              <span className="ne-sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            aria-describedby="category-sheet"
            className="ne-max-h-screen ne-overflow-y-auto ne-flex ne-flex-col"
            side="left"
          >
            <SheetHeader className="ne-border-b ne-pt-4">
              <SheetTitle className="ne-text-sm ne-flex ne-items-center ne-justify-between">
                <h1 className="ne-flex ne-items-center ne-gap-2 ne-text-sm ne-font-medium">
                  <span className="ne-leading-3">Navigation</span>
                </h1>
              </SheetTitle>
            </SheetHeader>
            <ul className="ne-flex ne-flex-col ne-gap-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/about_us">Home</Link>
              </li>
            </ul>
            <SheetHeader className="ne-border-b ne-pt-4">
              <SheetTitle className="ne-text-sm ne-flex ne-items-center ne-justify-between">
                <h1 className="ne-flex ne-items-center ne-gap-2 ne-text-sm ne-font-medium">
                  <span className="ne-leading-3">Categories</span>
                </h1>
              </SheetTitle>
            </SheetHeader>
            <div className="ne-h-full ne-overflow-y-auto">
              <ul className="ne-flex ne-flex-col ne-gap-4">
                {categories.map(({ name, id, shop_id }, index) => (
                  <li key={index}>
                    <Link
                      href={`/shop?category=${name
                        .split(" ")
                        .join("-")}&shop=${shop_id}&id=${id}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </li>
    </div>
  );
};

export default HeaderSearch;
