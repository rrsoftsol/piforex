"use client";
import { useState } from "react";

import peopleTrust from "@/public/images/people_trust_video.png";
import NumberCounter from "@/ui/NumberCounter";
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import ModalVideo from "react-modal-video";

export default function PeopleTrustTabItem({ reverse }: { reverse: boolean }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center">
      <div className={`col-xl-6 col-xxl-7 ${reverse ? "order-2 " : "order-1"}`}>
        <div className="people_trust_thumb d-center p-2 p-lg-5 pseudo_element_after overflow-hidden">
          <Image
            src={peopleTrust}
            className="w-100 max-xxl-un cus-rounded-2"
            alt="video"
          />
          <button
            className={`popup-video box_10 btn-popup-animation position-absolute d-center rounded-circle`}
            onClick={() => setOpen(true)}
          >
            <i className={`fa-solid ri-play-fill fs-two`}></i>
          </button>
        </div>
      </div>
      <div className={`col-xl-6 col-xxl-5 ${reverse ? "order-1 " : "order-2"}`}>
        <div className="trade_on__content">
          <h4 className="mb-4">What you will learn</h4>
          <p className="mx-ch">
            The rise of cryptocurrencies has opened up new trading In this
            beginner&apos;s guide to cryptocurrency trading we demystify the
            world of digital currencies
          </p>
          <ul className="list_divided d-flex flex-wrap gap-5 mt-5 mt-xxl-6">
            <li className="d-flex align-items-center gap-3 fs-six-up">
              <IconCircleCheck className="s1-color fs-four" />
              Charts trading
            </li>
            <li className="d-flex align-items-center gap-3 fs-six-up">
              <IconCircleCheck className="s1-color fs-four" />
              Supreme Authority
            </li>
            <li className="d-flex align-items-center gap-3 fs-six-up">
              <IconCircleCheck className="s1-color fs-four" />
              Worldly Power
            </li>
            <li className="d-flex align-items-center gap-3 fs-six-up">
              <IconCircleCheck className="s1-color fs-four" />
              Global Dominance
            </li>
          </ul>
          <div className="mt-8 mt-xxl-10">
            <div className="counter-area d-flex gap-8 gap-xxl-10">
              <div className="counter-part">
                <div className="counters d-flex">
                  <span className=" display-four s1-color">
                    <NumberCounter start={1} end={12} />
                  </span>
                  <span className="display-four symbol s1-color">K</span>
                </div>
                <span className="mt-4">Users Joined</span>
              </div>
              <div className="counter-part">
                <div className="counters d-flex">
                  <span
                    className="odometer display-four s1-color"
                    data-odometer-final="5.5"
                  >
                    <NumberCounter start={1} end={5} />
                  </span>
                  <span className="display-four symbol s1-color">M</span>
                </div>
                <span className="mt-4">Monthly Voulme (In USD)</span>
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
    </div>
  );
}
