import Image from "next/image";
import { Title } from "./components/title/title";
import { categories, products } from "./constant";
import Link from "next/link";
import { ProductCard } from "./components/productCard/productCard";
import { Layout } from "./layout";
import { LoadMore } from "./components/loadMore/loadMore";
import { useEffect, useState } from "react";
import { Slider } from "./components/slider/slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFetchCategories } from "../../hooks";
import useFetchProductsApi from "../../hooks/useFetchProductsApi";
import Products from "./components/Products/Products";
import { BeforeAfterSlider } from "./components/beforeAfterSlider/beforeAfterSlider";
import FeatureProduct from "./components/feature/FeatureProduct";

const getorderPermesion = async (shopId, userId) => {
  try {
    const res = await axios.get(API_ENDPOINTS.BASE_URL + API_ENDPOINTS.ORDER_PERMISION, {
      headers: {
        "shop-id": shopId,
        "id": userId,
        "X-Requested-With": "XMLHttpRequest"
      }
    })

    return res

  } catch (err) {
    console.log(err)
  }
};

export const Theme2 = ({ domainInfo }) => {
  const [orderPermision, setOrderPermision] = useState({})
  const { loading, error, categories } = useFetchCategories(
    domainInfo?.shop_id
  );
  const { slider, banner } = domainInfo;

  useEffect(() => {
    const getPermesion = async () => {
      const res = await getorderPermesion(domainInfo.shop_id, domainInfo.user_id)
      setOrderPermision(res?.data?.data?.order_perm_status)
    }
    getPermesion()
  }, [domainInfo])

  console.log("orderPermision", orderPermision)
  return (
    <Layout domainInfo={domainInfo} categories={categories}>
      <div className="ne-h-[calc(100vh-15rem)] ne-overflow-hidden">
        <Slider className="home-banner">
          {slider?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="ne-relative ne-flex ne-items-end ne-w-full ne-h-full ne-pb-8">
                <figure className="ne-absolute ne-inset-0">
                  <Image
                    className="ne-object-cover"
                    src={image?.image}
                    fill
                    alt={image?.title}
                  />
                </figure>
                <div className="ne-absolute ne-inset-0  ne-bg-gradient-to-b ne-from-transparent ne-via-black/40 ne-to-black/60"></div>
                <div className="ne-relative container ne-text-white">
                  <div className="_heading">
                    <p className="ne-uppercase ne-text-white ne-text-sm">
                      Pre-Fall Flash Sale
                    </p>
                  </div>
                  <div className="_heading">
                    <h1 className="ne-text-4xl _heading">Up to 40% off</h1>
                  </div>
                  <div className="_heading">
                    <p className="ne-text-white ne-text-sm ne-font-normal ne-max-w-sm _heading">
                      Long weekend plans? Shop and save up to 40% on every item.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>

      <section className="ne-py-6 container ne-mt-2">
        <Title>Categories</Title>

        <div className="ne-flex ne-items-center ne-justify-between ne-gap-2 ne-flex-wrap ne-mt-6">
          {categories?.slice(1).map(({ name, image, id, shop_id }, index) => (
            <div
              key={index}
              className="ne-flex ne-items-center ne-justify-center md:ne-flex-1 max-md:ne-w-[45%]"
            >
              <Link
                href={`/shop?category=${name
                  .split(" ")
                  .join("-")}&shop=${shop_id}&id=${id}`}
                className="ne-text-center ne-p-4 ne-rounded-md ne-border ne-transition-colors hover:ne-bg-primary/10"
              >
                <figure className="ne-relative ne-w-28 ne-h-28 ne-min-w-28 ne-border ne-mx-auto ne-rounded-full ne-overflow-hidden">
                  <Image
                    src={image}
                    fill
                    className="ne-object-cover"
                    alt={name}
                  />
                </figure>
                <h1 className="ne-text-lg ne-mt-2">{name}</h1>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* <FeatureProduct /> */}

      {/* <section className="ne-py-6 ne-bg-secondary ne-mt-2">
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
      </section> */}

      {/* <section className="ne-py-14 ne-bg-gradient-to-b ne-from-transparent ne-via-transparent ne-to-secondary container ne-mt-2">
        <Title>Experience the Difference</Title>
        <div className="ne-mt-6">
          <BeforeAfterSlider>
            <div className="ne-w-full ne-h-full ne-relative ne-flex ne-pb-8 ne-pl-8 ne-items-end">
              <Image src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/home-before-Lm5kfSq1sFewl2yLlmOZLrQXh0rL9n.jpg" alt="Before" fill className="ne-object-cover" />
              <div className="ne-relative ne-text-white">
                <p className="ne-uppercase ne-text-white ne-text-sm">Pre-Fall Flash Sale</p>
                <h1 className="ne-text-4xl _heading">Gold Tone</h1>
                <p className="ne-text-white ne-text-sm ne-font-normal ne-max-w-sm _heading">Long weekend plans? Shop and save up to 40% on every item.</p>
              </div>
            </div>
            <div className="ne-w-full ne-h-full ne-relative ne-flex ne-pb-8 ne-pr-8 ne-justify-end">
              <Image src="https://oej6luhmacjd52dw.public.blob.vercel-storage.com/home-after-VDzOvIju0TktxdBk64wvQWBe9vFp4U.jpg" alt="After" fill className="ne-object-cover" />
              <div className="ne-relative ne-text-white ne-flex ne-flex-col ne-items-end ne-justify-end">
                <p className="ne-uppercase ne-text-white ne-text-sm">Pre-Fall Flash Sale</p>
                <h1 className="ne-text-4xl _heading">Crimson</h1>
                <p className="ne-text-white ne-text-sm ne-font-normal ne-max-w-sm _heading">Long weekend plans? Shop and save up to 40% on every item.</p>
              </div>
            </div>
          </BeforeAfterSlider>
        </div>
      </section> */}

      <Products domainInfo={domainInfo} />

      <section className="ne-pt-6">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop
          autoplay={{
            delay: 2000,
          }}
          className="ne-text-center ne-py-4"
        >
          {Array.from(banner).map((item, index) => (
            <SwiperSlide
              className="ne-max-w-72 ne-w-96 ne-min-w-96"
              key={index}
            >
              <div className="ne-flex ne-flex-col ne-justify-start ne-items-center">
                <figure className="ne-w-full ne-h-72 md:ne-w-96 ne-overflow-hidden ne-rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="ne-object-cover ne-w-full ne-h-full"
                  />
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Layout>
  );
};
