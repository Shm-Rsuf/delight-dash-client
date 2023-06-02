"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "@/data/categoryImage";
import SectionTitle from "./SectionTitle";
import CategorySliderItem from "./CategorySliderItem";

const Category = () => {
  return (
    <section className="py-20 px-5">
      <SectionTitle subTitle="categories" title="Explore our all categories" />
      <div className="w-full h-[50vh]">
        <Swiper
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={750}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CategorySliderItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
