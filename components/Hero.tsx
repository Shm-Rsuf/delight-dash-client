"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { data } from "@/data/sliderImagesData";
import Image from "next/image";
import Link from "next/link";
import Overlay from "./Overlay";

const Hero = () => {
  return (
    <section className="w-full h-[75vh]">
      <Swiper
        parallax={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={750}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay, Parallax]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1080}
                priority
                className="w-full h-full object-cover"
              />
              <Overlay />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-50 text-center z-[2] flex flex-col items-center gap-3">
                <h1
                  data-swiper-parallax="-500%"
                  className="lg:text-6xl text-4xl font-semibold tracking-wider"
                >
                  {item.headline}
                </h1>
                <p data-swiper-parallax="-700%" className="text-lg">
                  {item.paragraph}
                </p>
                <div data-swiper-parallax="-900%">
                  <Link
                    href="/products"
                    className="btn btn-accent w-40 text-gray-50 tracking-wider bg-transparent hover:bg-rose-700/75"
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
