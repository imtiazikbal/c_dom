// import { Layout } from '@/theme_3/layout';
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/theme_2/components/ui/toggle-group";
import { Check, Truck, AlertCircle } from "lucide-react";
import { CartInput } from "@/theme_2/components/cart/cartInput";
import { Button } from "@/theme_2/components/ui/button";
import { description, products } from "@/theme_2/constant";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/theme_2/components/ui/dialog";
import ImageGallery from "react-image-gallery";
import Zoom from "react-medium-image-zoom";
import Values from "values.js";
import { Title } from "@/theme_2/components/title/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ProductCard } from "@/theme_2/components/productCard/productCard";
import { Badge } from "@/theme_2/components/ui/badge";
import { cn } from "@/theme_2/lib/utils";
import { useState, useEffect, useMemo } from "react";
import { ImageLoader, imagesSize } from "../../../../utils/imageLoader";
import { Layout } from "@/theme_2/layout";
import { useFetchCategories } from "../../../../hooks";
import RelatedProducts from "@/theme_2/components/RelatedProducts/RelatedProducts";
import { useRouter } from "next/router";
import axios from "axios";
import { findMinMaxPrice } from "../../../../utils/findMinMaxPrice";
import { CheckOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useToast } from "../../../../hooks/useToast";
import { addToCart } from "../../../../redux/stateSlices/CartSlice";
import { CartInputDetails } from "@/theme_2/components/cart/cartInputDetails";

const renderItem = (item) => {
  return (
    <div className="image-gallery-image">
      <Zoom>
        <img src={item.original} alt="" />
      </Zoom>
    </div>
  );
};

const renderThumbInner = (item) => {
  return (
    <div className="image-gallery-thumbnail-inner">
      <img
        src={item.thumbnail}
        alt=""
        className="image-gallery-thumbnail-image"
      />
    </div>
  );
};
export const Details = ({
  data = {}, // Set default to an empty object
  pageUrl = "",
  shopInfo = {},
  orderPermission = false,
  categories = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [loading, setLoading] = useState(true);
  const [fetchedVariantProduct, setFetchedVariantProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const showToast = useToast()
  const { minPrice, maxPrice } = useMemo(() => findMinMaxPrice(data?.variations), [data?.variations]);
  const prductIamges = [];
  prductIamges.push({
    original: ImageLoader(
      data?.main_image,
      imagesSize?.productDetailsImageWidth,
      imagesSize?.productDetailsImageHeight
    ),
    thumbnail: ImageLoader(
      data?.main_image,
      imagesSize?.productDetailsImageIconWidth,
      imagesSize?.productDetailsImageIconHeight
    ),
  });
  if (data?.other_images?.length > 0) {
    data.other_images.map((item) => {
      prductIamges.push({
        original: ImageLoader(
          item,
          imagesSize?.productDetailsImageWidth,
          imagesSize?.productDetailsImageHeight
        ),
        thumbnail: ImageLoader(
          item,
          imagesSize?.productDetailsImageIconWidth,
          imagesSize?.productDetailsImageIconHeight
        ),
      });
    });
  }
  // console.log("selectedVariants", selectedVariants);
  // console.log("data?.attributes", data?.attributes);

  const productFetchByVariants = async (reqBody) => {
    const headers = {
      "shop-id": shopInfo?.shop_id,
    };
    try {
      let response = await axios({
        method: "post",
        url: `${process.env.API_URL}/customer/product-combined-price`,
        headers,
        data: reqBody,
      });
      console.log("response", response);
      setFetchedVariantProduct(response?.data?.data);
    } catch (error) {
      setFetchedVariantProduct({});
    }
  };


  const handleAddToCart = (product, isNavigate) => {
    product.quantity = quantity;
    console.log("handleAddToCart", product);
    const { attributes } = data || {};
    const hasAttributes = attributes && attributes.length > 0;
  
    // Function to dispatch addToCart action and trigger optional navigation
    const addProductToCart = (productToAdd) => {
      console.log("productToAdd", productToAdd);
      dispatch(addToCart(productToAdd));
      // if (shopInfo?.other_script?.gtm_head) {
      //   tagManagerEvent("add_to_cart", productToAdd?.discounted_price, productToAdd);
      // }
      if (isNavigate === "navigateToCart") {
        router.replace("/checkout");
      }
    };
  
    // Handle case with no variations
    if (!hasAttributes) {
      addProductToCart(product);
      return;
    }
  
    // Ensure all variations are selected
    if (!selectedVariants ||  Object.keys(selectedVariants).length !== attributes.length) {
      showToast("Please select all variations", "error");
      return;
    }
  
    // Handle case with selected variations
    if (fetchedVariantProduct.id) {
      const updatedProduct = {
        ...product,
        variant: fetchedVariantProduct.variant,
        discounted_price: fetchedVariantProduct.price,
        variant_id: fetchedVariantProduct.id,
      };
      addProductToCart(updatedProduct);
    }
  };
  useEffect(() => {
    if (
      data?.attributes?.length > 0 &&
      Object.keys(selectedVariants).length === data.attributes.length
    ) {
      let attributes = data.attributes.map((attribute) => {
        const selectedValue = selectedVariants[attribute.key];
        return selectedValue; // Will return the value like "Red", "XXL", "200gm"
      });

      const variantPattern = attributes.join("-");

      const postBody = {
        variant: variantPattern,
        product_id: parseInt(router.query.id),
      };
      //  console.log("postBody", postBody);
      productFetchByVariants(postBody);
    }
  }, [data, selectedVariants, router.query.id]);
  useEffect(() => {
    // Simulate data loading
    if (data) {
      setLoading(false);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-8 border-t-transparent border-blue-500 rounded-full animate-spin border-solid"></div>
      </div>
    ); // Simple loading state
  }
  console.log("prductIamges", quantity);
  return (
    <Layout domainInfo={shopInfo} categories={categories}>
      <main className="md:ne-grid ne-grid-cols-2 container ne-mt-2 ne-gap-4">
        <div className="ne-col-span-1 ne-py-6">
          <ImageGallery
            items={prductIamges}
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
            {/* <div className="ne-flex ne-items-center ne-gap-2 ne-flex-wrap ne-mb-4">
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
            </div> */}
            <h1 className="ne-text-xl">{data?.product_name}</h1>
            <div className="ne-flex ne-items-center ne-mt-2">
              <h1 className="ne-text-lg">
                {" "}
                {/* {Number(data?.discounted_price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                {fetchedVariantProduct &&
                Object.keys(fetchedVariantProduct).length > 0 ? (
                  fetchedVariantProduct.price ? (
                    `৳ ${fetchedVariantProduct.price}`
                  ) : null
                ) : (
                  <>
                    ৳ {minPrice} {maxPrice > minPrice ? `- ৳ ${maxPrice}` : ""}
                  </>
                )}
                {data?.variations?.length === 0 && ` ${data?.discounted_price}`}
              </h1>
              {data?.price > data?.discounted_price && (
                <p className="ne-ml-2 ne-line-through ne-text-red-600">
                  <span className="ne-text-neutral-500">
                    {" "}
                    {Number(data?.price)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="ne-flex ne-items-center ne-gap-2 ne-flex-wrap">
            <div className="ne-mt-2 ne-py-1 ne-px-4 ne-bg-primary ne-text-primary-foreground ne-rounded-md ne-flex ne-items-center ne-gap-2">
              {data?.product_qty > 0 ? (
                <>
                  <Check />
                  <p className="ne-font-semibold ne-text-primary-foreground">
                    In stock
                  </p>
                </>
              ) : (
                <>
                  <AlertCircle />
                  <p className="ne-font-semibold ne-text-primary-foreground">
                    Out of Stock
                  </p>
                </>
              )}
            </div>
            <div className="ne-mt-2 ne-py-1 ne-px-4 ne-bg-primary/10 ne-rounded-md ne-flex ne-items-center ne-gap-2">
              <Truck />
              <p className="ne-font-semibold ne-text-neutral-800">
                ক্যাশ অন ডেলিভারি
              </p>
            </div>
          </div>
          <div className="ne-mt-6 ne-space-y-4">
            {data.attributes &&
              data?.attributes?.map((variant) => (
                <div key={variant.key}>
                  <h1 className="ne-text-base [border-bottom:1px_solid_hsl(var(--border))] ne-mb-4 ne-flex ne-items-center ne-justify-between">
                    <span className="[border-bottom:2px_solid_hsl(var(--foreground))] ne-pb-2 ne-inline-block">
                      {variant.key}
                    </span>
                    {selectedVariants[variant.key]}
                  </h1>
                  <ToggleGroup
                    type="single"
                    value={selectedVariants[variant.key]}
                    onValueChange={(value) =>
                      setSelectedVariants((prev) => ({
                        ...prev,
                        [variant.key]: value,
                      }))
                    }
                  >
                    {variant.values.map((option) => {
                      // console.log("value", option);

                      return (
                        <ToggleGroupItem
                          key={option.value}
                          value={option.value}
                          variant="outline"
                          className={`
                            ${
                              variant.type === "color"
                                ? "ne-w-8 ne-h-8 ne-rounded-full ne-p-0 ne-overflow-hidden ne-flex ne-items-center ne-justify-center"
                                : ""
                            }
                          `}
                        >
                          {option.value}
                        </ToggleGroupItem>
                      );
                    })}
                  </ToggleGroup>
                </div>
              ))}
          </div>
          <div className="ne-mt-8 ne-flex ne-items-center ne-gap-2">
            <CartInputDetails className="ne-min-w-40" quantity= {quantity} setQuantity={setQuantity} />
            <Button  onClick={() => handleAddToCart(data)}  className="ne-min-w-0" disabled={data?.product_qty <= 0} >Add To Cart</Button>
          </div>
          <Button disabled={data?.product_qty <= 0}  onClick={() => handleAddToCart(data, "navigateToCart")} className="ne-mt-2 ne-text-primary" variant="outline"  >
            Buy It Now
          </Button>
          <p className="ne-flex ne-items-center ne-justify-center ne-mt-2 ne-text-foreground ne-gap-1">
            <Truck className="ne-w-4 ne-h-4" />
            Shipping calculated at checkout
          </p>
          <div>
            <h1 className="ne-text-base ne-border-b ne-mb-4 ne-mt-8">
              <span className="[border-bottom:2px_solid_hsl(var(--foreground))] ne-pb-2">
                Description
              </span>
            </h1>
            <div>
              {data?.short_description ? (
                <p
                  className="ne-text-foreground"
                  dangerouslySetInnerHTML={{ __html: data.short_description }}
                />
              ) : (
                <p className="ne-text-foreground">Description not available.</p>
              )}
              {data.long_description && (
                <Dialog>
                  <DialogTrigger asChild>
                    <a href="#" className="ne-underline">
                      View more
                    </a>
                  </DialogTrigger>
                  <DialogContent className="ne-max-h-[calc(100vh-6rem)]">
                    <p
                      className="ne-text-foreground"
                      dangerouslySetInnerHTML={{
                        __html: data.long_description,
                      }}
                    />
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </div>
      </main>

      <RelatedProducts data={data} />
    </Layout>
  );
};
