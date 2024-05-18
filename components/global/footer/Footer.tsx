"use client";
import { footerLinks } from "@/constants/menu";
import star2 from "@/public/images/star2.png";
import starFocus from "@/public/images/star_focus.png";
import vector from "@/public/images/vector.png";
import vector4 from "@/public/images/vector4.png";
import SocialIcons from "@/ui/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function Footer() {
  return (
    <footer className="footer a2-bg position-relative pt-15 pt-lg-0 z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-xxxl-flex">
        <Image src={vector} alt="vector" className="position-absolute jello" />
        <Image
          src={vector4}
          alt="vector"
          className="position-absolute bottom-0 end-0"
        />
      </div>
      <div className="container">
        <div className="start-earning nb3-bg cus-rounded-2 d-flex align-items-center p-4 p-sm-6 p-md-10 p-lg-15 p-xl-20 pe-lg-6 pe-xl-16 overflow-hidden position-relative">
          <div className="vector_effect position-absolute d-center justify-content-end end-0 d-flex gap-20">
            <Image
              src={star2}
              alt="vector"
              className="d-none d-xxl-flex push_animat"
            />
            <Image
              src={starFocus}
              alt="vector"
              className="d-none d-sm-flex rotate time_dur ms-auto ms-lg-0 me-md-5"
            />
          </div>
          <div className="row gy-6 w-100 text-center text-sm-start align-items-center justify-content-sm-between">
            <div className="col-sm-8">
              <h2>Buy Sell Forex</h2>
              <p className="fs-six-up fw_500 mt-5">
                Try our hassle free exhange services
              </p>
            </div>
            <div className="col-sm-4 text-sm-end">
              <Link
                href="/contact"
                className="cmn-btn secondary-alt ms-auto fs-five nb4-xxl-bg gap-2 align-items-center py-2 px-4 py-lg-3 px-lg-5"
              >
                Contact <i className="ri-arrow-right-line fs-four"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gy-8 gy-sm-12 gy-lg-0 pt-120 pb-120">
          {footerLinks.map(({ id, title, links }) => (
            <div className="col-6 col-lg-3" key={id}>
              <div className="footer__part">
                <h4 className="mb-6 mb-lg-8">{title}</h4>
                <ul className="footer_list d-flex flex-column gap-2 gap-sm-3 gap-md-4">
                  {links.map(({ id, name, link }) => (
                    <li key={id}>
                      <Link
                        className="n2-color d-flex align-items-center"
                        href={link}
                      >
                        <i className="ri-arrow-right-s-line "></i>
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 border-top border-color opac-20 py-7 py-xxl-8">
            <div className="footer__copyright d-center gap-15 flex-wrap justify-content-md-between">
              <p className="fs-six order-2 order-md-0 text-center text-md-start">
                Copyright {new Date().getFullYear()} ©
                <span className="currentYear"></span> PIFOREX <span> |</span>{" "}
                Developed By{" "}
                <Link
                  href="https://rrsoftsol.com"
                  className="p1-color"
                >
                  RR SOFTSOL
                </Link>
              </p>
              <ul className="social-area d-center gap-2 gap-md-3">
                <SocialIcons />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TawkMessengerReact
                propertyId="664833ec9a809f19fb327971"
                widgetId="default"/>
    </footer> 
   
  );
}
