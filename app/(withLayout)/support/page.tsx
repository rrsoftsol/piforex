import Course from "@/components/education/Course";
import Faq from "@/components/education/Faq";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Support" />

      <section className="provide-world pt-120 position-relative z-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-xxl-6">
              <div className="heading__content mb-10 mb-lg-15 text-center">
                <h3 className="mb-5 mb-lg-6">Anytime Support from our team</h3>
                <p className="fs-six-up mx-ch mx-auto">
                  We&apos;re constantly improving our trading platform, trying
                  to make it the best on the market. such as stocks
                </p>
              </div>
            </div>
          </div>
          <Course noPadding={true} />
        </div>
      </section>

      <Faq />
    </>
  );
}
