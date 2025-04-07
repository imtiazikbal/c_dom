import { Product } from "@/theme_2/components/cart/product";
import { Button } from "@/theme_2/components/ui/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/theme_2/components/ui/radio-group";
import { Layout } from "@/theme_2/layout";
import { useState, useEffect } from "react";
import { Shell } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useFetchCategories } from "../../../../hooks";
import useTotalItems from "../../../../hooks/useTotalItems";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../redux/stateSlices/CartSlice";
import OrderForm from "./_component/OrderForm";

export const Checkout = ({
  domainInfo,
  visitorID,
  shippingSettings,
  shopID,
}) => {
  const [shippingCost, setShippingCost] = useState(null);
  const [shipping, setShipping] = useState("");
  const [mounted, setMounted] = useState(false);

  const { loading, error, categories } = useFetchCategories(domainInfo?.shop_id);
  const dispatch = useDispatch();
  const { totalItems, cart, totalPrice } = useTotalItems();
  const cartItemsAll = cart?.cartItems || [];

  // Remove item from cart
  const removeItem = (product) => dispatch(removeFromCart(product));

  // Mount check to handle SSR hydration
  useEffect(() => setMounted(true), []);

  // Calculate shipping cost based on settings and cart items
  useEffect(() => {
    if (shippingSettings?.status === 0 && cartItemsAll.length > 0) {
      const maxShippingItem = cartItemsAll.reduce((maxItem, item) => {
        const maxItemShipping = Math.max(
          maxItem.inside_dhaka || 0,
          maxItem.outside_dhaka || 0,
          maxItem.sub_area_charge || 0
        );
        const itemShipping = Math.max(
          item.inside_dhaka || 0,
          item.outside_dhaka || 0,
          item.sub_area_charge || 0
        );
        return itemShipping > maxItemShipping ? item : maxItem;
      });

      setShippingCost({
        inside_dhaka: maxShippingItem?.inside_dhaka,
        outside_dhaka: maxShippingItem?.outside_dhaka,
        sub_area_charge: maxShippingItem?.sub_area_charge,
      });
    } else {
      setShippingCost({
        inside: shippingSettings?.inside,
        outside: shippingSettings?.outside,
        subarea: shippingSettings?.subarea,
      });
    }
  }, [cartItemsAll, shippingSettings]);

  // Set default shipping option from shippingCost's first property
  useEffect(() => {
    setShipping(Object.keys(shippingCost || {})[0] || "");
  }, [shippingCost]);

  // Calculate shipping charge and total price
  const shippingCharge = 
    shipping === "inside_dhaka" || shipping === "inside"
      ? shippingCost?.inside_dhaka || shippingCost?.inside
      : shipping === "outside_dhaka" || shipping === "outside"
      ? shippingCost?.outside_dhaka || shippingCost?.outside
      : shippingCost?.sub_area_charge || shippingCost?.subarea;

  const total = totalPrice + (shippingCharge || 0);

  if (!mounted) return null;

  return (
    <Layout domainInfo={domainInfo} categories={categories}>
      {cartItemsAll.length > 0 ? (
        <>
          <h1 className="ne-mt-4 ne-text-2xl ne-text-center">Checkout</h1>
          <main className="container ne-py-6 ne-grid md:ne-grid-cols-2 ne-gap-4">
            <div className="ne-space-y-4">
              <div className="ne-space-y-2">
                {cartItemsAll.map((item, index) => (
                  <Product
                    key={index}
                    product={item}
                    onRemove={() => removeItem(item)}
                    size="small"
                  />
                ))}
              </div>
            </div>
            <div className="ne-space-y-4">
              <div className="ne-p-4 ne-border ne-rounded-md ne-shadow">
                <h1 className="ne-text-lg ne-mb-2">Shipping</h1>
                <div>
                  <RadioGroup
                    defaultValue={shipping}
                    value={shipping}
                    onValueChange={(e) => setShipping(e)}
                    className="ne-gap-0"
                  >
                    {shippingCost &&
                      Object.entries(shippingCost).map(([key, value]) => (
                        <div
                          key={key}
                          className={`ne-flex ne-items-center ne-space-x-2 ne-p-2 ne-rounded-md ${
                            shipping === key ? "ne-bg-primary/20" : ""
                          }`}
                        >
                          <RadioGroupItem value={key} id={key} />
                          <label htmlFor={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)} - ৳
                            {value}
                          </label>
                        </div>
                      ))}
                  </RadioGroup>
                </div>
              </div>
              <OrderForm
                shopID={shopID}
                cart={cartItemsAll}
                visitorID={visitorID}
                deliveryLocation={shipping}
                total={total}
                shippingCharge={shippingCharge}
                totalItems={totalItems}
                totalPrice={totalPrice}
              />
            </div>
          </main>
        </>
      ) : (
        <main className="ne-flex ne-items-center ne-justify-center ne-h-full ne-flex-col ne-gap-2 ne-py-16">
          <Shell className="ne-w-8 ne-h-8 ne-text-red-600" />
          <p className="ne-text-gray-500">Your cart is empty</p>
          <Link href="/">
            <Button
              variant="link"
              className="ne-w-full ne-text-base ne-flex ne-gap-2"
            >
              Continue Shopping
              <ArrowRight className="ne-w-5 ne-h-5" />
            </Button>
          </Link>
        </main>
      )}
    </Layout>
  );
};
