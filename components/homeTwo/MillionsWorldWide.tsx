import cross from "@/public/images/cross.png";
import cross2 from "@/public/images/cross2.png";
import star from "@/public/images/star.png";
import vector2 from "@/public/images/vector2.png";
import vectorRocket2 from "@/public/images/vector_rocket2.png";
import worldwideThumb from "@/public/images/worldwide_thumb.png";
import worldwideThumbBg from "@/public/images/worldwide_thumb_bg.png";
import NumberCounter from "@/ui/NumberCounter";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

export default function MillionsWorldWide() {
  return (
    <section className="worldwide alt-color p1-bg pseudo_element_after">
      <div className="animation vector position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={cross}
          alt="vector"
          className="position-absolute push_animat ms-lg-20 ps-4 top-0 pt-120 mt-20 start-0 d-none d-xxxl-flex"
        />
        <Image
          src={star}
          alt="vector"
          className="position-absolute push_animat end-0 top-0 mt-20 pt-xl-15 me-xl-20 pe-10 d-none d-md-flex"
        />
        <Image
          src={vector2}
          alt="vector"
          className="position-absolute bottom-0 start-0 d-none d-xxxl-flex"
        />
        <Image
          src={vectorRocket2}
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0  pe-12 pb-10 fadeInTopLeft"
        />
        <Image
          src={cross2}
          alt="vector"
          className="position-absolute push_animat ms-lg-20 ps-4 top-0 start-50 pt-120 mt-20 d-none d-xxxl-flex"
        />
      </div>
      <div className="container position-relative">
        <div className="row gy-10 gy-lg-0 justify-content-center justify-content-lg-between align-items-end">
          <div className="col-lg-6 col-xxl-5 pt-xl-20">
            <div className="trade_on__content me-xl-10 pt-120 pb-0 pb-lg-120">
              <h3 className="mb-4">
                Millions Worldwide Building a Brighter Future
              </h3>
              <p className="mx-ch">
                The rise of cryptocurrencies has opened up new trading In this
                beginner&apos;s guide to cryptocurrency trading we demystify the
                world of digital currencies
              </p>
              <ul className="list_divided d-flex flex-wrap gap-3 gap-lg-5 mt-5 mt-xxl-6">
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className=" fs-four" />
                  Charts trading
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className=" fs-four" />
                  Supreme Authority
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className=" fs-four" />
                  Worldly Power
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className=" fs-four" />
                  Global Dominance
                </li>
              </ul>
              <div className="mt-8 mt-xxl-10">
                <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                  <div className="counter-part">
                    <div className="counters d-flex">
                      <span className="odometer display-four s1-color">
                        <NumberCounter end={12} start={1} />
                      </span>
                      <span className="display-four symbol s1-color">K</span>
                    </div>
                    <span className="mt-4">Users Joined</span>
                  </div>
                  <div className="counter-part">
                    <div className="counters d-flex">
                      <span className="odometer display-four s1-color">
                        <NumberCounter end={5} start={1} />
                      </span>
                      <span className="display-four symbol s1-color">M</span>
                    </div>
                    <span className="mt-4">Monthly Voulme (In USD)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 col-sm-7 col-lg-6 col-xxl-5">
            <div className="worldwide_thumb d-flex ms-lg-15 ms-xl-0"></div>
            <div className="why-trade__thumbs h-100 d-flex align-items-end justify-content-center position-relative z-0">
              <Image src={worldwideThumb} className="max-xl-un" alt="Image" />
              <Image
                src={worldwideThumbBg}
                className="position-absolute max-xl-un z-n1 bottom-0 pt-15"
                alt="Imgae"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
