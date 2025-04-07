import { Clock } from 'lucide-react';
import Link from 'next/link';

export const Notice = () => {
  return (
    <div className="ne-w-full ne-py-2 ne-bg-white">
      <div className="container ne-flex ne-items-center ne-justify-between max-md:ne-flex-col ne-gap-2">
        <div className="ne-flex ne-items-center ne-gap-2">
          <h1 className="ne-text-base ne-text-neutral-500">Helpline: +88012345678901</h1>
        </div>
        <div>
          <ul className="ne-flex ne-items-center ne-gap-2">
            <div className="ne-flex ne-items-center ne-gap-4 max-md:ne-hidden">
              <li>
                <Link href="/" className="ne-text-base ne-text-neutral-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="ne-text-base ne-text-neutral-500">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about_us" className="ne-text-base ne-text-neutral-500">
                  About Us
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
