import React, { useEffect, useState, useRef } from "react";
import { Title } from "../title/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { ProductCard } from "@/theme_3/components/productCard/productCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { API_ENDPOINTS } from "../../../../config/ApiEndpoints";
import axios from "axios";

const RelatedProducts = ({ data }) => {
  const [relativeProducts, setRelativeProducts] = useState([]);
  
  // Use refs to properly capture navigation elements
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);  // Store Swiper instance

  const fetchData = async (pageNumber = 1) => {
    if (!data.category_id || !data.shop_id) {
      console.warn("Missing category_id or shop_id");
      return;
    }

    const url = `${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.PRODUCT.CATEGORY_PRODUCTS}/${data.category_id}?page=${pageNumber}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "shop-id": data.shop_id,
        },
      });

      console.log("API Response:", response.data.data);
      if (response.data.success) {
        setRelativeProducts(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (data.shop_id && data.category_id) {
      fetchData();
    }
  }, [data.shop_id, data.category_id]);

  // Use effect to initialize Swiper navigation after render
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Reinitialize Swiper navigation
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  // console.log("relativeProducts",relativeProducts);

  if (!relativeProducts.length) return null;

  return (
    <section className="ne-py-6 ne-bg-secondary ne-mt-2">
      <div className="container">
        <Title>Products You May Like</Title>

        <div className="ne-relative">
          <Swiper
            slidesPerView="auto"
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-progressbar",
              type: "progressbar",
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Pagination, Navigation]}
            loop
            freeMode
            autoplay={{ delay: 2000 }}
            className="ne-py-4 ne-mt-4"
            onSwiper={(swiper) => {
              swiperRef.current = swiper; // Store the swiper instance
            }}
          >
            {relativeProducts.map((product) => (
              <SwiperSlide key={product.id} className="ne-max-w-60 ne-h-full">
                <ProductCard
                  product={product}
                  className="ne-max-w-60 hover:ne-bg-transparent"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="ne-flex ne-items-center ne-gap-2">
            <Button
              ref={prevRef}
              variant="outline"
              size="icon"
              className="ne-rounded-full _feat-prev"
            >
              <ChevronLeft />
            </Button>
            <Button
              ref={nextRef}
              variant="outline"
              size="icon"
              className="ne-rounded-full _feat-next"
            >
              <ChevronRight />
            </Button>

            <div className="ne-relative ne-h-0.5 ne-w-full">
              <div className="swiper-pagination-progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
