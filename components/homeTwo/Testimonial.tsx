"use client";
// Import Swiper styles
import "swiper/css";
// @ts-ignore
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { testimonial2 } from "@/constants/testimonial";
import quoteBg from "@/public/images/icon/quote_bg.png";
import quoteBgRight from "@/public/images/icon/quoteRight.png";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="testimonial-secondary te pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={quoteBg}
          alt="vector"
          className="position-absolute push_animat d-none d-md-flex"
        />
        <Image
          src={quoteBgRight}
          alt="vector"
          className="position-absolute push_animat d-none d-md-flex "
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading fs-five s1-color mb-5">Testimonial</span>
              <h3>What people say</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper testimonial_swiper">
              <Swiper
                loop={true}
                speed={2000}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={40}
                modules={[Pagination, Autoplay, FreeMode]}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                className="swiper-wrapper"
              >
                {testimonial2.map(({ id, img, name, designation, review }) => (
                  <SwiperSlide
                    key={id}
                    className="swiper-slide d-flex justify-content-center"
                  >
                    <div className="col-lg-10 col-xl-8 col-xxl-6">
                      <div className="testimonial__par text-center">
                        <div className="author_thumbs">
                          <Image
                            src={img}
                            alt="icon"
                            className="rounded-circle"
                          />
                        </div>
                        <div className="author_content">
                          <p className=" fs-six-up mt-5 mt-xxl-6">{review}</p>
                          <h5 className="heading p1-color mt-5">{name}</h5>
                          <span className="fs-eight fw_500 mt-2">
                            {designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination mt-8 mt-md-10 mt-lg-15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
