"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

type Props = {
  img: StaticImageData;
  name: string;
  date: string;
  comment: string;
};

export default function CommentCard({ img, name, date, comment }: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className="content-part d-flex flex-column flex-sm-row gap-4 gap-lg-6">
      <div className="author__thumbs">
        <Image src={img} className="rounded-circle max-un" alt="image" />
      </div>
      <div className="author__content w-100 ">
        <div className="d-flex justify-content-between gap-10">
          <div className="author__info">
            <span className="fs-five fw_500 nw1-color">{name}</span>
            <p className="author__submit-time fs-seven mt-1">
              {date}, {new Date().getFullYear()}
            </p>
          </div>
          <div className="feedback__content">
            <button
              className="reply-btn gap-2 d-center fs-six-up fw_500 nw1-color"
              onClick={() => setShow((prev) => !prev)}
            >
              <i className="ri-reply-fill fs-four p1-color"></i>
              Reply
            </button>
          </div>
        </div>
        <p className="mt-3">{comment}</p>
        <AnimateHeight height={show ? "auto" : 0}>
          <form method="POST" name="replySearch" className="">
            <div className="input-area d-flex p-3 px-lg-5 gap-2 cus-rounded-1 mt-4">
              <input type="text" placeholder="Search" required />
              <button
                type="submit"
                className="icon_btn d-center p1-bg rounded-circle "
              >
                <i className="ri-search-line fs-five nb4-color"></i>
              </button>
            </div>
          </form>
        </AnimateHeight>
      </div>
    </div>
  );
}
