import { faqData } from "@/constants/faq";
import plus from "@/public/images/plus.png";
import star30 from "@/public/images/star30.png";
import vector21 from "@/public/images/vector21.png";
import AccordionCard from "@/ui/AccordionCard";
import Image from "next/image";

export default function Faqs() {
  return (
    <section className="faq pb-120 pt-120 position-relative z-0">
      <div className="animation vector position-absolute top-0 left-0 w-100 h-100 z-n1">
        <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
          <Image
            src={plus}
            alt="vector"
            className="position-absolute  top-0 start-0 ps-20 ms-10 pt-120 previewShapeRevX d-none d-xl-flex"
          />
          <Image
            src={star30}
            alt="vector"
            className="position-absolute push_animat end-0 top-0  pt-20 me-xl-20 pe-20 d-none d-lg-flex"
          />
          <Image
            src={vector21}
            alt="vector"
            className="position-absolute bottom-0 start-0 pb-11 ps-20 ms-10 d-none d-xxxl-flex "
          />
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading fs-five p1-color mb-5">
                Frequent question
              </span>
              <h3>Do you have any question</h3>
            </div>
          </div>
        </div>
        <div className="row gy-6 justify-content-center align-items-center">
          <div className="col-xl-6">
            <div className="faq__part">
              <div className="accordion-section d-grid gap-6">
                {faqData.slice(0, 4).map(({ id, title, desc }) => (
                  <AccordionCard key={id} title={title} desc={desc} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="faq__part">
              <div className="accordion-section d-grid gap-6">
                {faqData.slice(3, 8).map(({ id, title, desc }) => (
                  <AccordionCard key={id} title={title} desc={desc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
