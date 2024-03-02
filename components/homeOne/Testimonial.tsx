"use client";
// Import Swiper styles
import "swiper/css";
// @ts-ignore
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

import { testimonial } from "@/constants/testimonial";
import quoteLeft from "@/public/images/icon/quote_left.png";
import star from "@/public/images/star.png";
import sun from "@/public/images/sun.png";
import vector2 from "@/public/images/vector2.png";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="testimonial p1-bg pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={star}
          alt="vector"
          className="position-absolute push_animat"
        />
        <Image
          src={vector2}
          alt="vector"
          className="position-absolute bottom-0 start-0 d-none d-xxxl-flex"
        />
        <Image
          src={sun}
          alt="vector"
          className="position-absolute push_animat d-none d-xxl-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content alt-color mb-10 mb-lg-15 text-center">
              <span className="heading fs-five mb-5">Testimonial</span>
              <h3>What people say</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="swiper common-slider1 cus-rounded-1 d-center align-items-end align-items-xxl-center">
              <Swiper
                className="swiper-wrapper"
                loop={true}
                speed={2000}
                modules={[Autoplay, Navigation]}
                navigation={{ prevEl: ".ara-next", nextEl: ".ara-prev" }}
                slidesPerView={"auto"}
                spaceBetween={14}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 1.48,
                    centeredSlides: true,
                  },
                  1200: {
                    slidesPerView: 1.22,
                    centeredSlides: false,
                  },
                }}
              >
                {testimonial.map(({ id, img, name, designation, review }) => (
                  <SwiperSlide
                    key={id}
                    className="swiper-slide cus-rounded-1 overflow-hidden"
                  >
                    <div>
                      <div className="testimonial__part a2-bg d-flex flex-column flex-sm-row align-items-center">
                        <div className="testimonial__author d-none d-sm-flex">
                          <Image src={img} className="max-xxl-un" alt="Image" />
                        </div>
                        <div className="testimonial__content p-4 p-lg-7 p-xxl-8">
                          <div className="content__part">
                            <Image src={quoteLeft} alt="icon" />
                            <p className="fs-six-up mt-5 mt-xxl-6">{review}</p>
                            <h5 className="heading p1-color mt-4">{name}</h5>
                            <span className="fs-seven fw_500 mt-2">
                              {designation}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="slider-btn position-absolute justify-content-end d-center justify-content-xxl-between gap-2 w-100 pb-3 pb-sm-5 pb-xxl-0 px-8 px-sm-18 px-xl-12 px-xxl-18">
                <button
                  type="button"
                  aria-label="Slide Prev"
                  className="ara-prev slide-button cmn-btn2 d-center"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
                <button
                  type="button"
                  aria-label="Slide Next"
                  className="ara-next slide-button cmn-btn2 d-center"
                >
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
