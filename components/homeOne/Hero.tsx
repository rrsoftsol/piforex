import circleStar from "@/public/images/circle_star.png";
import heroThumb from "@/public/images/hero_thumb.png";
import heroVector from "@/public/images/hero_vector.png";
import CirleText from "@/ui/CirleText";
import {
  IconBroadcast,
  IconPercentage,
  IconTools,
  IconTrendingUp,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={heroVector}
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX"
        />
      </div>
      <div className="container pt-20 mt-12 mt-lg-20">
        <div className="row pt-4 pt-lg-10 gy-12 gy-lg-0 justify-content-center justify-content-lg-between align-items-center">
          <div className="col-lg-6 col-xxl-7">
            <div className="hero-card p1-xxl-bg pt-xl-20 pb-xl-20 position-relative">
              <div className="pt-xxl-10 pb-xxl-10">
                <div className="circle-text first d-center cus-z1 position-absolute end-0 top-0 d-none d-xxl-flex me-lg-10 mt-lg-10">
                  <CirleText />
                  <Image src={circleStar} alt="star" className="push_animat" />
                </div>
                <span className="heading p1-max-xxl nb4-xxl-color fs-five mb-3">
                Buy Sell Forex
                </span>
                <h1 className="display-two nb4-xxl-color mb-5 mb-lg-6">
                Hassle free exchange
                </h1>
                <p className="fs-six-up fw_500 nb4-xxl-color">
                Simplify your foreign exchange transactions with our trusted and secure platform
                </p>
                <div className="d-inline-flex flex-wrap gap-4 gap-lg-10 align-items-center mt-8 mt-lg-10">
                  <Link
                    href="/contact"
                    className="cmn-btn alt-xxl-bg fs-five nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6"
                  >
                   Contact us <IconTrendingUp />
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-lg-6 col-xxl-5">
            <div className="hero-section__thumbs pb-xxl-10">
              <Image
                src={heroThumb}
                className="max-auto max-xxl-un"
                alt="img"
              />
            </div>
          </div>
          <ul className="list_items col-12 d-flex row-gap-6 gap-lg-15 justify-content-between flex-wrap pt-2 pt-lg-15 pt-xl-2 pt-xxl-15 pb-15">
            <li className="d-flex gap-3 align-items-center">
              <span className="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <IconTools className="fs-three nb4-color" />
              </span>
              <h4 className="nw1-color">Buy Forex</h4>
            </li>
            <li className="d-flex gap-3 align-items-center">
              <span className="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <IconTrendingUp className="fs-three nb4-color" />
              </span>
              <h4 className="nw1-color">Sell Forex</h4>
            </li>
            <li className="d-flex gap-3 align-items-center">
              <span className="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <IconBroadcast className="fs-three nb4-color" />
              </span>
              <h4 className="nw1-color">Fast Execution</h4>
            </li>
            <li className="d-flex gap-3 align-items-center">
              <span className="d-center s1-bg p-3 p-lg-4 rounded-circle">
                <IconPercentage className="fs-three nb4-color" />
              </span>
              <h4 className="nw1-color">0% Commission</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
