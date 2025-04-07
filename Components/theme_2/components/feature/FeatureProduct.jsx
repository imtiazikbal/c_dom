import { Navigation, Pagination } from "swiper";
import { Title } from "../title/title";
import { Swiper, SwiperSlide } from "swiper/react";
import { products } from "@/theme_2/constant";
import { ProductCard } from "../productCard/productCard";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";


const FeatureProduct = () => {
  return (
   <section className="ne-py-6 ne-bg-secondary ne-mt-2">
        <div className="container">
          <Title>Featured Products</Title>

          <div className="ne-relative">
            <Swiper
              slidesPerView="auto"
              pagination={{
                clickable: true,
                el: '.swiper-pagination-progressbar',
                type: 'progressbar',
              }}
              navigation={{
                prevEl: '._feat-prev',
                nextEl: '._feat-next',
              }}
              spaceBetween={30}
              modules={[Pagination, Navigation]}
              loop
              freeMode
              autoplay={{
                delay: 2000,
              }}
              className="ne-py-4 ne-mt-4"
            >
              {products
                .filter(product => product.isFeatured)
                .map((product, index) => (
                  <SwiperSlide key={index} className="ne-max-w-60 ne-h-full">
                    <ProductCard product={product} className="ne-max-w-60 hover:ne-bg-transparent" />
                  </SwiperSlide>
                ))}
            </Swiper>
            <div className="ne-flex ne-items-center ne-gap-2">
              <div className="ne-flex ne-items-center ne-gap-2">
                <Button variant="outline" size="icon" className="ne-rounded-full _feat-prev">
                  <ChevronLeft />
                </Button>
                <Button variant="outline" size="icon" className="ne-rounded-full _feat-next">
                  <ChevronRight />
                </Button>
              </div>
              <div className="ne-relative ne-h-0.5 ne-w-full">
                <div className="swiper-pagination-progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </section> 

  );
};

export default FeatureProduct;