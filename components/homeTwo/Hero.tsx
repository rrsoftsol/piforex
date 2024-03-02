"use client";
import { useState } from "react";

import ModalVideo from "react-modal-video";

import circleStar2 from "@/public/images/circle_star2.png";
import heroMobile from "@/public/images/hero_mobile.png";
import heroMobileStar from "@/public/images/hero_mobile_star.png";
import heroVideo from "@/public/images/hero_video.png";
import vectorMan from "@/public/images/vector_men.png";
import vectorMan2 from "@/public/images/vector_men2.png";
import vectorRocket from "@/public/images/vector_rocket.png";
import CirleText from "@/ui/CirleText";
import { IconTrendingUp } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="hero-section--secondary position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <div className="animation__thumbs position-absolute">
          <Image
            src={vectorMan}
            alt="vector"
            className="d-none d-xxxl-flex  previewShapeX "
          />
        </div>
        <div className="animation__thumbs position-absolute">
          <Image
            src={vectorMan2}
            alt="vector"
            className=" previewShapeRevX d-none d-xxl-flex"
          />
        </div>
        <Image
          src={vectorRocket}
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0 pe-12 pb-10 fadeInTopLeft"
        />
      </div>
      <div className="container pt-20 mt-20">
        <div className="row pt-4 pt-lg-10 gy-12 gy-lg-0 justify-content-center align-items-center">
          <div className="col-lg-10 col-xxl-7">
            <div className="hero-content text-center">
              <h1 className="display-two mb-10 mb-lg-15">
                &quot;Trading Expansion&quot;
              </h1>
              <div className="d-center flex-wrap gap-4 gap-lg-10">
                <Link
                  href="/registration"
                  className="cmn-btn secondary-alt fs-five nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6"
                >
                  Start Trading <IconTrendingUp />
                </Link>
                <Link
                  href="/login"
                  className="cmn-btn link  fs-five  gap-2 gap-lg-3 align-items-center "
                >
                  <i className="ri-arrow-right-line"></i> Try demo account
                </Link>
              </div>
            </div>
            <div className="circle-text first d-center cus-z1 position-absolute d-none d-xxxl-flex">
              <CirleText />
              <Image src={circleStar2} alt="star" className="push_animat" />
            </div>
            <div className="circle-text first d-center cus-z1 position-absolute end-0 top-0 d-none d-xxl-flex  pe-lg-10 pt-lg-10"></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-7 col-lg-5 col-xxl-4">
            <div className="hero-video-area pseudo_element_before mb-10 mx-auto ms-auto ms-md-10 ms-lg-20 mt-8 mt-lg-10 justify-content-center justify-content-sm-end">
              <Image src={heroVideo} alt="image" />

              <div className="video_content position-absolute end-0 bottom-0 d-flex gap-3 z-1 ps-4 ">
                <button
                  className={`popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle small`}
                  onClick={() => setOpen(true)}
                >
                  <i className={`fa-solid ri-play-fill fs-four`}></i>
                </button>
                <span className="ms-14">Let’s See how we did it</span>
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-lg-5 col-xxl-8 d-none d-md-flex">
            <div className="vector_thumbs position-relative z-0 ms-4 pt-8 pt-lg-10">
              <Image src={heroMobile} className=" ms-8 ms-lg-15" alt="image" />
              <div className="position-absolute z-n1 start-0 top-0">
                <Image
                  src={heroMobileStar}
                  alt="image"
                  className="rotate time_dur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="SIm3nKfJnFE"
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
