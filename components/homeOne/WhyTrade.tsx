import star from "@/public/images/star.png";
import sun from "@/public/images/sun.png";
import tradeVector from "@/public/images/trade_vector.png";
import whyTrade from "@/public/images/why_trade.png";
import whyTradeBg from "@/public/images/why_trade_bg.png";
import Image from "next/image";
import Link from "next/link";

export default function WhyTrade() {
  return (
    <section className="why-trade s1-bg alt-color position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={sun}
          alt="vector"
          className="position-absolute push_animat"
        />
        <Image
          src={star}
          alt="vector"
          className="position-absolute d-xxxl-flex previewSkew"
        />
      </div>
      <div className="container">
        <div className="row gy-3 gy-lg-0 justify-content-center">
          <div className="col-8 col-md-10 col-lg-6 col-xxl-5 order-2 order-lg-0">
            <div className="why-trade__thumbs h-100 d-flex align-items-end ps-sm-5 ps-lg-0 position-relative z-0">
              <Image src={whyTrade} alt="Imgae" />
              <Image
                src={whyTradeBg}
                className="position-absolute z-n1 end-0 bottom-0 pt-15 d-none d-md-flex d-lg-none d-xl-flex pe-5 pe-xxl-0"
                alt="Imgae"
              />
            </div>
          </div>
          <div className="col-lg-6 col-xxl-7">
            <div className="row pt-120 pb-120">
              <div className="col-xxl-6 offset-xxl-2">
                <div className="why-trade__part">
                  <span className="heading fs-five">Why Exachange With</span>
                  <h3 className="mb-3 mt-5">PI FOREX</h3>
                  <p>
                  We offer a full suite of forex products consisting of currency notes, forex cards, and remittances, and student membership programs in an inexpensive and convenient way.

                  </p>
                  <Link
                    href="/about"
                    className="cmn-btn link secondary-link fs-six-up gap-2 gap-lg-3 align-items-center mt-5"
                  >
                    Learn more <i className="ri-arrow-right-line fs-four"></i>
                  </Link>
                </div>
              </div>
              <div className="col-xxl-12 mt-7 mt-md-8 mt-xxl-3">
                <div className="why-trade__part d-flex align-items-center">
                  <div className="vector d-none d-xxl-flex px-xxl-15">
                    <Image
                      src={tradeVector}
                      alt="Image"
                      className="max-xxl-un"
                    />
                  </div>
                  <div className="content">
                    <h3 className="mb-3">Buy Sell Forex</h3>
                    <p>
                    we offer you a seamless process to purchase currency notes at the best rates, ensuring a convenient and efficient experience, Choose from a wide range of currencies and denominations to suit your travel or business needs.

                    </p>
                    <Link
                      href="/about"
                      className="cmn-btn link secondary-link fs-six-up gap-2 gap-lg-3 align-items-center mt-5"
                    >
                      Learn more <i className="ri-arrow-right-line fs-four"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
