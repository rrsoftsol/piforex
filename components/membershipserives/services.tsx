"use client";
import { useState } from "react";
import earth from "@/public/images/earth.png";
import vector6 from "@/public/images/vector6.png";
import vector8 from "@/public/images/vector8.png";
import NumberCounter from "@/ui/NumberCounter";
import { IconCircleCheck, IconSend } from "@tabler/icons-react";
import Image from "next/image";

const tabButton = ["Forex Services", "Forex Card", "CA Certification","Visa and Immigration Services"];

export default function WeHelp() {
  const [active, setActive] = useState("forex-services");
  return (
    <section className="customers position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={vector6}
          alt="vector"
          className="position-absolute rotate d-none d-xxxl-flex start-0 top-0 pt-20 mt-5 ps-20 ms-5"
        />
        
        <Image
          src={earth}
          alt="vector"
          className="position-absolute d-none d-xl-flex bottom-0 end-0 rotate"
        />
      </div>
      <div className="container">
        <div className="row gy-10 gy-xl-0 justify-content-center justify-content-lg-between align-items-center align-items-xxl-end">
          <div className="col-lg-12 col-xxl-512 pb-0 pt-120 pb-lg-120">
            <div >
              <h3 className=" d-center mb-4">Membership Services.</h3>
              <p >
              Embark on your international education journey with confidence and ease by joining Pi Forex&apos;s Student Membership program. Enjoy a range of tailored benefits designed to support your financial needs and simplify the complexities of studying abroad:
              </p>
              
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
                    active === "forex-services" ? "active" : ""
                  }`}
                >
                  <div>From currency exchange to fund transfers, we’ve got you covered.</div>
                </div>
                <div
                  className={`tabitem ${
                    active === "forex-card" ? "active" : ""
                  }`}
                >
                   <div>Accessing funds abroad has never been easier with our Forex card solutions.</div>
                </div>
                <div
                  className={`tabitem ${
                    active === "ca-certification" ? "active" : ""
                  }`}
                >
                   <div>Certified professionals to validate your financial documents, ensuring compliance and reliability.</div>
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
