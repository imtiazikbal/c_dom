import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToCart } from "../../../redux/stateSlices/CartSlice";
import { tagManagerEvent } from "../../../lib/TagManagerEvent";
import { useToast } from "../../../hooks/useToast";

const useHandleAddToCart = (shopInfo, data, selectedVariation, fetchedVariantProduct) => {
  const dispatch = useDispatch();
  const showToast = useToast();
  const router = useRouter();

  const handleAddToCart = (product, isNavigate) => {
    if (!data?.attributes?.length) {
      dispatch(addToCart(product));
      if (shopInfo?.other_script?.gtm_head) {
        tagManagerEvent("add_to_cart", product?.discounted_price, product);
      }
      if (isNavigate === "navigateToCart") router.replace("/checkout");
      return;
    }

    if (selectedVariation?.length !== data?.attributes?.length) {
      showToast("Please select all variations", "error");
      return;
    }

    if (fetchedVariantProduct.id) {
      const updatedProduct = {
        ...product,
        variant: fetchedVariantProduct?.variant,
        discounted_price: fetchedVariantProduct?.price,
        variant_id: fetchedVariantProduct?.id,
      };
      dispatch(addToCart(updatedProduct));
      if (shopInfo?.other_script?.gtm_head) {
        tagManagerEvent("add_to_cart", updatedProduct?.discounted_price, updatedProduct);
      }
      if (isNavigate === "navigateToCart") router.replace("/checkout");
    }
  };

  return handleAddToCart;
};

export default useHandleAddToCart;
