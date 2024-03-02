"use client";
import useClickOutside from "@/hooks/useClickOutside";
import AnimateHeight from "react-animate-height";
export default function AccordionCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const { modal, setModal, modalRef } = useClickOutside();
  return (
    <div
      className={`accordion-single  cus-rounded-1 nb3-bg box-shadow py-3 py-md-4 px-4 px-md-5 ${
        modal ? "accordion_bg active" : ""
      }`}
      ref={modalRef}
    >
      <h5 className="header-area" onClick={() => setModal((prev) => !prev)}>
        <button
          className="accordion-btn transition fw-semibold text-start d-flex position-relative justify-content-between  w-100"
          type="button"
        >
          {" "}
          <span>{title}</span>
          <i
            className={`${
              modal ? "ri-indeterminate-circle-line" : " ri-add-circle-line"
            }`}
          ></i>
        </button>
      </h5>
      <AnimateHeight duration={500} height={modal ? "auto" : 0}>
        <div className="   pt-5">
          <p className="text-dark">{desc}</p>
        </div>
      </AnimateHeight>
    </div>
  );
}
