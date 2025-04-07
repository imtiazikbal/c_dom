import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import main Swiper styles
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useRouter } from "next/router";
import { ImageLoader, imagesSize } from "../../../utils/imageLoader";
import Image from "next/image";
import defaultSideImage from "../../../public/theme_1/images/slider.jpg"

// Import the Swiper styles and components
SwiperCore.use([Autoplay, Pagination]);

const Banner = ({ domainInfo }) => {
  const router = useRouter();
  const removeHash = (value) => {
    let validLink = '';
    if(value.charAt(0) === "#"){
      validLink = value.substring(1);
    }else{
      validLink = value
    }
    return validLink;
  }
  return (
    <section className='Banner'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className='BannerSlider'>
              <Swiper
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Pagination]}
                className='mySwiper'
              >
                {
                    domainInfo?.slider?.length === 0  && <SwiperSlide>
                      <div className='BannerItem'>
                        <Image src={defaultSideImage} alt='Banner' />
                      </div>
                    </SwiperSlide>
                  }
                  {
                    domainInfo?.slider != null && domainInfo?.slider?.length > 0 && domainInfo?.slider?.map((item, index) => <SwiperSlide key={index}>
                      <div className='BannerItem' onClick={() => router.push(item?.link ? removeHash(item?.link) : "#")} style={{cursor: 'pointer'}}>
                        <img src={ImageLoader(item?.image, imagesSize.sliderWidth, imagesSize.sliderHeight)} alt='Banner'  />                       
                      </div>
                    </SwiperSlide>)
                  }
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
