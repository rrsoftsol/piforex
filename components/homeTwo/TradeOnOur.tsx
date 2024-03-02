import star3 from "@/public/images/star3.png";
import tradeOn2 from "@/public/images/trade_on2.png";
import vector from "@/public/images/vector.png";
import vector5 from "@/public/images/vector5.png";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function TradeOnOur() {
  return (
    <section className="trade_on a2-bg pt-120 pb-120 position-relative z-0">
      <div className="animation vector position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={star3}
          alt="vector"
          className="position-absolute top-0 end-0 pe-15 pt-20 push_animat d-none d-xxxl-flex"
        />
        <Image
          src={vector}
          alt="vector"
          className="position-absolute top-0 start-0 pt-20 ms-20 jello d-none d-xxxl-flex"
        />
        <Image
          src={vector5}
          alt="vector"
          className="position-absolute bottom-0 end-0 d-none d-lg-flex previewShapeRevX "
        />
      </div>
      <div className="container">
        <div className="row gy-10 gy-xxl-0 justify-content-center justify-content-xxl-between align-items-center">
          <div className="col-10 col-sm-8 col-md-7 col-lg-6 order-2 order-lg-0">
            <div className="trade_on__thumbs d-flex justify-content-end">
              <Image src={tradeOn2} alt="Imgae" />
            </div>
          </div>
          <div className="col-lg-6 col-xxl-5">
            <div className="trade_on__content">
              <span className="heading p1-color fs-five mb-5">
                Trade On Our
              </span>
              <h3 className="mb-4 mb-lg-5">World className Platform</h3>
              <p className="fs-six mx-ch">
                Trading in financial markets involves a wide range of strategies
                that traders employ to make informed decisions. From trading to
                swing trading and long-term investing, each strategy has its own
                set of principles and risk factors.
              </p>
              <ul className="d-flex gap-4 flex-column mt-6">
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="p1-color fs-four" />
                  Charts trading
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="p1-color fs-four" />
                  Understanding Trading Strategies{" "}
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="p1-color fs-four" />
                  Risk Management in Trading{" "}
                </li>
                <li className="d-flex align-items-center gap-3 fs-six-up">
                  <IconCircleCheck className="p1-color fs-four" />
                  Technical vs. Fundamental Analysis{" "}
                </li>
              </ul>
              <Link
                href="/registration"
                className="cmn-btn fs-six-up nb4-xxl-bg gap-2 gap-lg-3 align-items-center py-2 px-3 py-lg-3 px-lg-4 mt-7 mt-xxl-8"
              >
                Sign up Now <i className="ri-arrow-right-line fs-four"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
