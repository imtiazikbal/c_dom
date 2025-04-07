import Image from 'next/image';
import { Title } from './components/title/title';
import { categories, products } from './constant';
import Link from 'next/link';
import { ProductCard } from './components/productCard/productCard';
import { Layout } from './layout';
import { LoadMore } from './components/loadMore/loadMore';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import { Button } from './components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Grid } from 'swiper';

export const Theme3 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(null);
  const loadMore = () => {
    if (timer) clearTimeout(timer);
    setIsLoading(true);
    setTimer(
      setTimeout(() => {
        setIsLoading(false);
      }, 2000)
    );
  };
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <Layout>
      <div className="ne-relative ne-flex ne-items-end ne-w-full ne-h-[40rem] ne-overflow-hidden ne-pb-8">
        {domLoaded && (
          <Swiper
            className="theme3-slider ne-w-full ne-h-full"
            mousewheel={false}
            loop={true}
            autoplay={{ delay: 3000 }}
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={{ nextEl: '.__next-banner', prevEl: '.__prev-banner' }}
          >
            {[
              'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/2FX0O6B5HCQjZczXuUjVUeF3RFWOjzjXIg8QGRMX-5tCsHf0dZUX6MejXwxq617eAF95bHI.jpg',
              'https://oej6luhmacjd52dw.public.blob.vercel-storage.com/zpc4OwwAnPLGTjAzvgDcrCx2W4wp6MU9mMfOQklB-E0YifU08mj0gAWlPtCFqlVZnWCz82v.jpg',
            ].map((image, index) => (
              <SwiperSlide key={index}>
                <div className="ne-relative ne-flex ne-items-center ne-w-full ne-h-full ne-pb-8">
                  <figure className="ne-absolute ne-inset-0">
                    <Image className="ne-object-cover" src={image} fill />
                  </figure>
                  {index === 1 && (
                    <div className="ne-relative ne-z-10 container">
                      <h1>Discover your </h1>
                      <h1>true beauty</h1>
                      <Button className="ne-inline-flex ne-w-auto ne-mt-2">Start Shopping</Button>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
            <Button variant="secondary" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-left-10 __prev-banner">
              <ChevronLeft />
            </Button>
            <Button variant="secondary" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-right-10 __next-banner">
              <ChevronRight />
            </Button>
          </Swiper>
        )}
      </div>

      <section className="ne-py-6 container ne-mt-2">
        <Title>Shop By Category</Title>

        <div className="ne-flex ne-items-center ne-justify-between ne-gap-2 ne-flex-wrap ne-mt-6 ne-relative md:ne-px-12">
          {domLoaded && (
            <Swiper
              navigation={{ nextEl: '.category-next', prevEl: '.category-prev' }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                    fill: 'row',
                  },
                },
              }}
              grid={{
                rows: 2,
                fill: 'row',
              }}
              spaceBetween={30}
              modules={[Grid, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ne-bg-neutral-100 ne-shadow-md ne-py-8">
                  <div className="ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-mx-auto [filter:drop-shadow(-25px_18px_6px_rgba(194,194,194,1))] ne-rounded-full ne-rounded-bl-none">
                    <figure className="ne-relative ne-w-20 ne-h-20 md:ne-w-32 md:ne-h-32 lg:ne-w-56 lg:ne-h-56 ne-overflow-hidden ne-rounded-full ne-rounded-bl-none">
                      <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/beauty-salon-66-ZtPmClBaZG75H31bqC9EuBXHgMy3sM.jpg" fill />
                    </figure>
                  </div>
                  <h1 className="ne-text-base ne-uppercase ne-text-foreground ne-relative ne-z-[1] ne-text-center ne-mt-8">Whitening & Brightening </h1>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
          <Button variant="secondary" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-left-0 category-prev">
            <ChevronLeft />
          </Button>
          <Button variant="secondary" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-right-0 category-next">
            <ChevronRight />
          </Button>
        </div>
      </section>

      <section className="ne-py-6 container ne-mt-2">
        <Title>Featured Products</Title>
        <div className="ne-relative">
          {domLoaded && (
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
              modules={[Navigation]}
              loop
              autoplay={{
                delay: 2000,
              }}
              className="ne-py-4 ne-mt-2"
            >
              {products
                .filter(product => product.isFeatured)
                .map((product, index) => (
                  <SwiperSlide key={index} className="ne-max-w-60 ne-h-full">
                    <ProductCard product={product} className="ne-max-w-60 hover:ne-bg-transparent" />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
          <div className="ne-flex ne-items-center ne-gap-2">
            <div className="ne-flex ne-items-center ne-gap-2">
              <Button variant="outline" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-left-0 _feat-prev">
                <ChevronLeft />
              </Button>
              <Button variant="outline" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-right-0 _feat-next">
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="ne-py-6 container ne-mt-2">
        <div className="ne-flex ne-items-center ne-justify-between ne-border-b-2">
          <div className="ne-pb-2 ne-border-b-2 ne-border-b-black">
            <h1 className="ne-text-2xl ne-font-bold ne-text-foreground">New Arrival</h1>
          </div>
          <Button size="sm" className="ne-w-auto">
            View More
          </Button>
        </div>

        <div className="md:ne-grid md:ne-grid-cols-3 ne-mt-4 ne-gap-4">
          <div className="ne-flex ne-items-start">
            <div className="ne-w-full ne-pb-16">
              {domLoaded && (
                <Swiper className="theme3-slider theme3-slider-feat ne-w-full ne-h-full" mousewheel={false} loop={true} autoplay={{ delay: 3000 }} modules={[Pagination]} pagination={{ clickable: true }}>
                  {products.slice(0, 2).map((product, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard product={product} minimal />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
          <div className="md:ne-col-span-2">
            <div className="ne-relative">
              {domLoaded && (
                <Swiper
                  loop
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                      grid: {
                        rows: 2,
                        fill: 'row',
                      },
                    },
                  }}
                  grid={{
                    rows: 2,
                    fill: 'row',
                  }}
                  pagination={{
                    clickable: true,
                    el: '.swiper-pagination-progressbar',
                    type: 'progressbar',
                  }}
                  navigation={{
                    prevEl: '.arrival-prev',
                    nextEl: '.arrival-next',
                  }}
                  spaceBetween={30}
                  modules={[Navigation, Grid]}
                  autoplay={{
                    delay: 2000,
                  }}
                >
                  {products.map((product, index) => (
                    <SwiperSlide key={index} className="ne-max-w-60 ne-h-full">
                      <ProductCard product={product} className="ne-max-w-60 hover:ne-bg-transparent" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <div className="ne-flex ne-items-center ne-gap-2">
                <div className="ne-flex ne-items-center ne-gap-2">
                  <Button variant="outline" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-left-0 arrival-prev">
                    <ChevronLeft />
                  </Button>
                  <Button variant="outline" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-right-0 arrival-next">
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ne-py-6 ne-mt-2">
        <div className="ne-relative ne-flex ne-items-center ne-w-full ne-h-[450px] ne-pb-8">
          <figure className="ne-absolute ne-inset-0">
            <Image className="ne-object-cover" src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/CnOauu8No17qFfVC2T7LDrAHAroG2JMJydh2xp42-FG6V6jODCWhPmtroucQ3mjzTAo8wTY.webp" fill/>
          </figure>
          <div className="ne-relative ne-z-10 container">
            <h1 className="ne-text-5xl md:ne-text-7xl ne-font-semibold">DERMO</h1>
            <h1 className="ne-text-5xl md:ne-text-7xl ne-font-semibold">COSMETICS</h1>
            <Button className="ne-inline-flex ne-w-auto ne-mt-2 ne-text-xl" size="lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      <section className="ne-py-6 container ne-mt-2">
        <div className="ne-flex ne-items-center ne-justify-between ne-border-b-2">
          <div className="ne-pb-2 ne-border-b-2 ne-border-b-black">
            <h1 className="ne-text-2xl ne-font-bold ne-text-foreground">Best Selling</h1>
          </div>
          <Button size="sm" className="ne-w-auto">
            View More
          </Button>
        </div>

        <div className="md:ne-grid md:ne-grid-cols-3 ne-mt-4 ne-gap-4">
          <div className="md:ne-col-span-2">
            <div className="ne-relative">
              {domLoaded && (
                <Swiper
                  loop
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                      grid: {
                        rows: 2,
                        fill: 'row',
                      },
                    },
                  }}
                  grid={{
                    rows: 2,
                    fill: 'row',
                  }}
                  pagination={{
                    clickable: true,
                    el: '.swiper-pagination-progressbar',
                    type: 'progressbar',
                  }}
                  navigation={{
                    prevEl: '.arrival-prev',
                    nextEl: '.arrival-next',
                  }}
                  spaceBetween={30}
                  modules={[Navigation, Grid]}
                  autoplay={{
                    delay: 2000,
                  }}
                >
                  {products.map((product, index) => (
                    <SwiperSlide key={index} className="ne-max-w-60 ne-h-full">
                      <ProductCard product={product} className="ne-max-w-60 hover:ne-bg-transparent" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <div className="ne-flex ne-items-center ne-gap-2">
                <div className="ne-flex ne-items-center ne-gap-2">
                  <Button variant="outline" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-left-0 arrival-prev">
                    <ChevronLeft />
                  </Button>
                  <Button variant="outline" size="icon" className="ne-absolute ne-top-1/2 ne-z-10 ne-rounded-full ne-bg-white ne-border ne-right-0 arrival-next">
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="ne-flex ne-items-start max-md:ne-mt-4">
            <div className="ne-w-full ne-pb-16">
              {domLoaded && (
                <Swiper className="theme3-slider theme3-slider-feat ne-w-full ne-h-full" mousewheel={false} loop={true} autoplay={{ delay: 3000 }} modules={[Pagination]} pagination={{ clickable: true }}>
                  {products.slice(0, 2).map((product, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard product={product} minimal />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
