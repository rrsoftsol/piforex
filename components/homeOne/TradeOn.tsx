import coin from "@/public/images/coin.png";
import coinVector from "@/public/images/coin_vector.png";
import star2 from "@/public/images/star2.png";
import tradeOn from "@/public/images/trade_on.png";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function TradeOn() {
  return (
    <section className="trade_on a2-bg pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={coin}
          alt="vector"
          className="position-absolute d-none d-md-flex previewShapeRevX"
        />
        <Image
          src={star2}
          alt="vector"
          className="position-absolute d-none d-xl-flex push_animat"
        />
        <Image
          src={coinVector}
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX opacity-50"
        />
      </div>
      <div className="container">
        <div className="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
          <div className="col-lg-6 col-xxl-5">
            <div className="trade_on__content">
              <span className="heading s1-color fs-five mb-5">
                Get Our
              </span>
              <h3 className="mb-4 mb-lg-5">Membership Services</h3>
              <p className="fs-six mx-ch">
              Embark on your international education journey with confidence and ease by joining Pi Forex&apos;s Student Membership program. Enjoy a range of tailored benefits designed to support your financial needs and simplify the complexities of studying abroad.
              </p>
              <ul className="d-flex gap-4 flex-column mt-6">
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="s1-color fs-four" />
                  Forex Services
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="s1-color fs-four" />
                  Forex Card
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="s1-color fs-four" />
                  CA Certification
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="s1-color fs-four" />
                  Visa and Immigration Services
                </li>
              </ul>
              <Link
                href="/contact"
                className="cmn-btn secondary-alt fs-six-up nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-5 py-lg-3 px-lg-6 mt-7 mt-xxl-8"
              >
                Contact Us Now <i className="ri-arrow-right-line fs-four"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="trade_on__thumbs d-flex justify-content-end">
              <Image src={tradeOn} alt="Imgae" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
