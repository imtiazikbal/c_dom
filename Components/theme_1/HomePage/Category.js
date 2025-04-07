import { Container } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation, FreeMode } from "swiper";
import { ImageLoader, imagesSize } from "../../../utils/imageLoader";
import { useRouter } from "next/router";
import { useCategories } from "../../../hooks/useCategories";
import Image from "next/image";
const Category = () => {
  const router = useRouter()
  const { state } = useCategories();
  return (
    <section>
      <Container>
        <div className="Multipage__1__CategoriesDiv">
          <h2>Categories</h2> 
         
          <div>
            <Swiper
              slidesPerView={7}
              spaceBetween={30}
              slidesPerGroup={1}
              freeMode={true}
              modules={[FreeMode, Navigation]}
              className="mySwiper2"
              navigation={true}
              breakpoints={{
                300: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },

                1280: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },

                1480: {
                  slidesPerView: 7,
                  spaceBetween: 30,
                },
              }}
            >
              {state?.category?.map((item, index) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div onClick={() => router.push(`/shop?category=${item.name.split(" ").join("-")}&shop=${item?.shop_id}&id=${item?.id}`)} style={{ cursor: 'pointer' }}>
                      <div className="Multipage__1__Categories__Slider__Div">
                        <div className="Multipage__1__Categories__Slider__Div_Dflex">
                          <div className="Multipage__1__Categories__Slider__ImgDiv">
                            <img src={ImageLoader(item?.image, imagesSize.categoryIconWidth, imagesSize.categoryIconWidth)} alt={item?.name} />
                          </div>
                        </div>
                        <h4>{item?.name} </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          
        </div>
      </Container>
    </section>
  );
};
export default Category;
