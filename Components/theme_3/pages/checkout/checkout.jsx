import { Product } from '@/theme_3/components/cart/product';
import { Button } from '@/theme_3/components/ui/button';
import { Input } from '@/theme_3/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/theme_3/components/ui/radio-group';
import { Layout } from '@/theme_3/layout';
import { cn } from '@/theme_3/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { Asterisk } from 'lucide-react';
import * as React from 'react';

export const Checkout = () => {
  const [shipping, setShipping] = React.useState('inside-dhaka');
  return (
    <Layout>
      <h1 className="ne-mt-4 ne-text-2xl ne-text-center">Checkout</h1>
      <main className="container ne-py-6 ne-grid md:ne-grid-cols-2 ne-gap-4">
        <div className="ne-space-y-4">
          <div className="ne-space-y-2">
            <Product size="small" />
            <Product size="small" />
            <Product size="small" />
          </div>
          <div className="ne-p-4 ne-border ne-rounded-md ne-shadow">
            <h1 className="ne-text-lg">Shipping</h1>

            <div>
              <RadioGroup defaultValue={shipping} value={shipping} onValueChange={e => setShipping(e)} className="ne-gap-0">
                <div className={cn('ne-flex ne-items-center ne-space-x-2 ne-p-2 ne-rounded-md', shipping === 'inside-dhaka' && 'ne-bg-primary/20')}>
                  <RadioGroupItem value="inside-dhaka" id="inside-dhaka" />
                  <label htmlFor="inside-dhaka">Inside Dhaka - ৳১২০</label>
                </div>
                <div className={cn('ne-flex ne-items-center ne-space-x-2 ne-p-2 ne-rounded-md', shipping === 'outside-dhaka' && 'ne-bg-primary/20')}>
                  <RadioGroupItem value="outside-dhaka" id="outside-dhaka" />
                  <label htmlFor="outside-dhaka">Outside Dhaka - ৳২২০</label>
                </div>
                <div className={cn('ne-flex ne-items-center ne-space-x-2 ne-p-2 ne-rounded-md', shipping === 'sub-area' && 'ne-bg-primary/20')}>
                  <RadioGroupItem value="sub-area" id="sub-area" />
                  <label htmlFor="sub-area">Sub Area - ৳৫০</label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="ne-p-6 ne-border ne-rounded-md ne-shadow">
          <h1 className="ne-text-lg">Shipping Address</h1>
          <div className="ne-mt-4">
            <ul className="ne-flex ne-flex-col ne-gap-2">
              <li>
                <label htmlFor="name" className="ne-mb-1 ne-flex ne-items-center ne-gap-1">
                  আপনার নাম লিখুন
                  <Asterisk className="ne-text-red-600 ne-w-4 ne-h-4" />
                </label>
                <Input placeholder="Name" />
              </li>
              <li>
                <label htmlFor="name" className="ne-mb-1 ne-flex ne-items-center ne-gap-1">
                  আপনার মোবাইল নাম্বারটি লিখুন
                  <Asterisk className="ne-text-red-600 ne-w-4 ne-h-4" />
                </label>
                <Input placeholder="Phone" />
              </li>
              <li>
                <label htmlFor="name" className="ne-mb-1 ne-flex ne-items-center ne-gap-1">
                  আপনার ঠিকানা লিখুন
                  <Asterisk className="ne-text-red-600 ne-w-4 ne-h-4" />
                </label>
                <Input placeholder="Address" />
              </li>
              <li className="ne-py-2 ne-space-y-2">
                <div className="ne-flex ne-items-center ne-justify-between ne-border-b ne-pb-2">
                  <h1 className="ne-text-base">Total Items</h1>
                  <p className="ne-text-primary ne-text-lg ne-font-semibold">3</p>
                </div>
                <div className="ne-flex ne-items-center ne-justify-between">
                  <h1 className="ne-text-base">Subtotal</h1>
                  <p className="ne-text-primary ne-text-lg ne-font-semibold">৳ 9999.99</p>
                </div>
              </li>
              <li>
                <Button className="ne-w-full ne-text-base ne-flex ne-gap-2">
                  <ShoppingCart className="ne-w-5 ne-h-5" />
                  অর্ডার করুন - ৳9999.99
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
};
