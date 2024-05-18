"use client";
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
import { useState } from "react";

import { Dropdown, DropdownButton } from "react-bootstrap";

export default function Hero() {
  const rates ={'USD': 84.22,'EUR': 94.22,'AED': 23.22,}
  const [dropvalue, setOpen] = useState("USD - United States Dollar");
  const [rate, setRate] = useState(84.22);
  const [fcAmount, setFcAmount] = useState(1);
  const amount = Number(fcAmount * rate);
  return (
    <section className="hero-section position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={heroVector}
          alt="vector"
          className="position-absolute d-none d-xxxl-flex bottom-0 end-0 previewShapeRevX"
        />
      </div>
      <div className="container mt-12 mt-lg-20">
        <div className="row pt-4 pt-lg-10 gy-12 gy-lg-0 justify-content-center justify-content-lg-between align-items-center">
          <div className="col-lg-6">
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
                  Simplify your foreign exchange transactions with our trusted
                  and secure platform
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
          <div className="col-sm-10 col-lg-6">
            <div className="hero-section__thumbs pb-xxl-10">
              <div className="sign__content ms-md-5 ms-xxl-0 px-10">
                <div className="head_part">
                  <h5 className="mt-5 mt-lg-6">Buy Foreign Exchange</h5>
                </div>
                <div 
                  id="frmContactus"
                  className="contact__form mt-8 mt-lg-10 text-start"
                >
                  <div className="d-flex flex-column gap-5 gap-lg-6 ">
                    <div className="single-input d-flex">
                      <input
                        type="text"
                        className="fs-six-up bg_transparent rounded-end-0 "
                        name="fcamount"
                        id="fcamount"
                        value={fcAmount} maxLength={10}
                        onChange={e => setFcAmount(Number(e.target.value))}
                        placeholder="Enter FC Amount"
                        required
                      />
                     
                      <DropdownButton
                        id="dropdown-item-button"  className="w-75"
                        title={dropvalue}
                      >
                        <Dropdown.Item
                          as="button"
                          onClick={() => setOpen("USD - United States Dollar")}
                        >
                          USD - United States Dollar
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="button"
                          onClick={() => setOpen("EUR - Euro")}
                        >
                         EUR - Euro
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="button"
                          onClick={() => setOpen("AED - United Arab Emirates Dirham")}
                        >
                          AED - United Arab Emirates Dirham
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <div className="mt-3 d-flex align-items-center gap-1 flex-wrap">
                      <button className="cmn-btn py-3 px-5 rounded-5 d-center">
                        =
                      </button>
                      <label className="nw1-color" htmlFor="uname">
                        Current Rate: {rate}
                      </label>
                    </div>
                    <div className="single-input d-flex">
                      <input
                        type="text"
                        className="fs-six-up bg_transparent"
                        name="amount"
                        id="amount" readOnly={true}
                        value={amount}
                        required
                      />
                      <button type="button" 
                       className="btn btn-primary w-75 rounded-start-0">INR - Indian Rupees</button>
                       
                    </div>
                  </div>

                  <div className=" mt-7 mt-lg-8">
                    <button className="cmn-btn py-3 px-5 px-lg-6 mt-7 mt-lg-8 d-center">
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
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
