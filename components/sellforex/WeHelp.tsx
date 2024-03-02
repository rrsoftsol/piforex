import customers from "@/public/images/customers.png";
import earth from "@/public/images/earth.png";
import vector6 from "@/public/images/vector6.png";
import vector8 from "@/public/images/vector8.png";
import NumberCounter from "@/ui/NumberCounter";
import { IconSend } from "@tabler/icons-react";
import Image from "next/image";

export default function WeHelp() {
  return (
    <section className="customers position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={vector6}
          alt="vector"
          className="position-absolute rotate d-none d-xxxl-flex start-0 top-0 pt-20 mt-5 ps-20 ms-5"
        />
        <Image
          src={vector8}
          alt="vector"
          className="position-absolute bottom-0 pb-20 mb-4 d-none d-xxl-flex"
        />
        <Image
          src={earth}
          alt="vector"
          className="position-absolute d-none d-xl-flex bottom-0 end-0 rotate"
        />
      </div>
      <div className="container">
        <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center align-items-xxl-end">
          <div className="col-lg-6 col-xxl-5 pb-0 pt-120 pb-lg-120">
            <div className="customers__content me-xxl-18">
              <h3 className="mb-4">Sell Forex.</h3>
              <p className="mx-ch">
              we offer you a straightforward platform to exchange your foreign currency with ease and convenience. Here&apos;s what you can expect:
At Pi Forex, we ensure that you receive competitive rates for selling your foreign currency.
Provide the necessary documents and get the best possible rates, ensuring maximum value for your money.


              </p>
               
              <div className="pt-7 pt-lg-8 mt-7 mt-lg-8 border-top border-color four">
                <div className="counter-area d-flex gap-8 gap-xxl-10 ">
                  <div className="counter-part">
                    <span className="box_15 p1-bg rounded-circle d-center mb-5">
                      <IconSend className="fs-four nb4-color" />
                    </span>
                    <div className="counters d-flex">
                      <span className="odometer display-four">
                        <NumberCounter start={0} end={10000} />
                      </span>
                    </div>
                    <span className="mt-4">Transactions</span>
                  </div>
                  <div className="counter-part">
                    <span className="box_15 p1-bg rounded-circle d-center mb-5">
                      <i className="ri-user-line fs-four nb4-color"></i>
                    </span>
                    <div className="counters d-flex">
                      <span className="odometer display-four">
                        <NumberCounter start={0} end={1000} />
                      </span>
                    </div>
                    <span className="mt-4">Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6 col-xxl-6 ">
            <div className="customers__thumb">
              <Image
                src={customers}
                className="w-100 max-xxl-un cus-rounded-2"
                alt="video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
