"use client";
import useClickOutside from "@/hooks/useClickOutside";
import AnimateHeight from "react-animate-height";
import JobDescription from "./JobDescription";
export default function JobAccordionCard({ title }: { title: string }) {
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
        <span className="accordion_sub_cont fs-6 mt-1 w-100 fw-normal">
          Full-time | Cyprus | Tradez
        </span>
      </h5>
      <AnimateHeight duration={500} height={modal ? "auto" : 0}>
        <JobDescription />
      </AnimateHeight>
    </div>
  );
}
