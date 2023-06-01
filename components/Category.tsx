"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "@/data/categoryImage";
import Image from "next/image";
import Overlay from "./Overlay";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <section className="py-20 px-5">
      <SectionTitle subTitle="categories" title="Explore our categories" />
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
              <div className="w-full h-full relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
                <Overlay />
                <div className="absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <h3 className="text-2xl font-semibold tracking-wider">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
