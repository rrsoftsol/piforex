"use client";
import { useState } from "react";

import story from "@/public/images/company_story.png";
import star3 from "@/public/images/star3.png";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";

export default function CompanyStory() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="company-story position-relative z-0  pt-120 pb-120 ">
      <div className="animation position-absolute w-100 h-100 z-n1">
        <Image
          src={star3}
          alt="vector"
          className="position-absolute top-0 end-0 pt-10 pe-20 me-20 d-none d-xxl-flex previewSkew"
        />
      </div>
      <div className="container">
        <div className="row gy-15 gy-lg-0 justify-content-center align-items-center">
          <div className="col-sm-10 col-lg-6 col-xxl-5 order-2 order-lg-0">
            <div className="company-story__thumbs d-center">
              <Image src={story} className="cus-rounded-1 w-100" alt="Imgae" />
              <button
                className={`popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle`}
                onClick={() => setOpen(true)}
              >
                <i className={`fa-solid ri-play-fill fs-two`}></i>
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-xxl-7">
            <div className="row ms-xl-3 ms-xxl-10">
              <div className="col-xxl-6">
                <div className="company-story__part">
                  <span className="heading p1-color fs-five">
                    Our Company Story
                  </span>
                  <h3 className="mb-3 mt-5">What We Do</h3>
                  <p>
                  We offer a full suite of forex products consisting of currency notes, forex cards, and remittances, and student membership programs in an inexpensive and convenient way.

                  </p>
                </div>
              </div>
              <div className="col-xxl-12 mt-8 mt-md-10 mt-xxl-13">
                <div className="company-story__part d-flex align-items-sm-center flex-column flex-sm-row">
                  <div className="btn-area mt-8 mt-sm-0 me-2 me-sm-6 me-xxl-10 order-2 order-sm-0">
                    <Link
                      href="/contact"
                      className="cmn-btn cmn-btn-circle d-center flex-column fw_500"
                    >
                      <i className="ri-arrow-right-up-line fs-three"></i>
                      Start Now
                    </Link>
                  </div>
                  <div className="content">
                    <h3 className="mb-3">Who We Are</h3>
                    <p>
                    Prima Infinite Forex Trading Private Limited is a Private Limited Company incorporated in the Year 2023 and has been licensed by the Reserve Bank of India (RBI) as Full Fledged Money Changer (FFMC) to carry out International Currency Exchange / Money Exchange Activities.

                    </p>
                  </div>
                </div>
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
