import { faqData } from "@/constants/faq";
import button from "@/public/images/button.png";
import faq from "@/public/images/faq.png";
import star2 from "@/public/images/star2.png";
import vector20 from "@/public/images/vector20.png";
import AccordionCard from "@/ui/AccordionCard";
import Image from "next/image";

export default function Faq({ a2Bg }: { a2Bg?: boolean }) {
  return (
    <section
      className={`faq ${
        !a2Bg ? "" : "a2-bg"
      } pb-120 pt-120 position-relative z-0`}
    >
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={button}
          alt="vector"
          className="position-absolute pt-6 pt-xl-15 previewShapeRevX d-none d-xl-flex"
        />
        <Image
          src={star2}
          alt="vector"
          className="position-absolute push_animat end-0 top-0 mt-20 pt-5 me-xl-20 pe-10 d-none d-lg-flex"
        />
        <Image
          src={vector20}
          alt="vector"
          className="position-absolute bottom-0 start-0 pb-11 ps-7 d-none d-xxxl-flex"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading fs-five p1-color mb-5">Faq’s</span>
              <h3>Frequently Asked Question</h3>
            </div>
          </div>
        </div>
        <div className="row gy-10 justify-content-center align-items-center">
          <div className="col-md-12 col-lg-7 col-xxl-6">
            <div className="faq__part">
              <div className="accordion-section d-grid gap-6">
                {faqData.map(({ id, title, desc }) => (
                  <AccordionCard key={id} title={title} desc={desc} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-9 col-sm-8 col-lg-5 col-xxl-6">
            <div className="faq_thumbs d-flex justify-content-center justify-content-xl-end">
              <Image src={faq} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
