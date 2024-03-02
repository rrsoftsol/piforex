"use client";
// Import Swiper styles
import "swiper/css";
// @ts-ignore
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";

import { companyImage } from "@/constants/testimonial";
import Image from "next/image";

export default function CompanyLogoSlider() {
  return (
    <div className="client_company_section py-10 p1-bg align-items-center justify-content-center">
      <div className="swiper client_company client_company_section">
        <Swiper
          loop={true}
          speed={6000}
          modules={[Autoplay, FreeMode]}
          spaceBetween={14}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          breakpoints={{
            1400: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            576: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="swiper-wrapper align-items-center"
        >
          {companyImage.map(({ id, img }) => (
            <SwiperSlide key={id} className="swiper-slide text-center">
              <Image src={img} alt="Client Logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
