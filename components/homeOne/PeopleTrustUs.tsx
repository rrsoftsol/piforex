"use client";
import { useState } from "react";

import star3 from "@/public/images/star3.png";
import vector from "@/public/images/vector.png";
import vector3 from "@/public/images/vector3.png";
import Image from "next/image";
import PeopleTrustTabItem from "../shared/PeopleTrustTabItem";

const tabButton = ["Test Your Knowledge", "Tutorial Videos", "Live Commentary"];

export default function PeopleTrustUs() {
  const [active, setActive] = useState("test-your-knowledge");
  return (
    <section className="people_trust pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={vector}
          alt="vector"
          className="position-absolute jello d-none d-xl-flex"
        />
        <Image
          src={star3}
          alt="vector"
          className="position-absolute push_animat d-none d-xxxl-flex"
        />
        <Image
          src={vector3}
          alt="vector"
          className="position-absolute bottom-0 end-0 d-none d-xxxl-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-xxl-7">
            <div className="heading__content mb-8 mb-lg-10 text-center">
              <span className="heading p1-color fs-five mb-5">
                People Trust Us
              </span>
              <h3 className="mb-4 mb-lg-6">Millions of Users Worldwide</h3>
              <p className="fs-six-up mx-ch mx-auto">
                The rise of cryptocurrencies has opened up new trading this
                beginner&apos;s guide to cryptocurrency trading,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="singletab">
              <ul className="tablinks d-center flex-wrap gap-3 gap-lg-4 mb-10 mb-xxl-15">
                {tabButton.map((tab, idx) => (
                  <li
                    key={idx}
                    className={`nav-links ${
                      tab.split(" ").join("-").toLocaleLowerCase() === active
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setActive(tab.split(" ").join("-").toLocaleLowerCase())
                    }
                  >
                    <button className="tablink cmn-btn outline_btn align-items-center fs-six-up py-2 py-lg-3 px-6 px-md-3 px-xxl-10 d-flex gap-3 align-items-center">
                      <i className="ri-vidicon-line fs-four s1-color"></i>
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tabcontents">
                <div
                  className={`tabitem ${
                    active === "test-your-knowledge" ? "active" : ""
                  }`}
                >
                  <PeopleTrustTabItem reverse={false} />
                </div>
                <div
                  className={`tabitem ${
                    active === "tutorial-videos" ? "active" : ""
                  }`}
                >
                  <PeopleTrustTabItem reverse={true} />
                </div>
                <div
                  className={`tabitem ${
                    active === "live-commentary" ? "active" : ""
                  }`}
                >
                  <PeopleTrustTabItem reverse={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
