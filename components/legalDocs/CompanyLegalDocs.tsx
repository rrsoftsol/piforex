import Link from "next/link";

export default function CompanyLegalDocs() {
  return (
    <section className="provide-world pt-120 position-relative z-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-xxl-6">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <h3 className="mb-5 mb-lg-6">Company legal docs</h3>
              <p className="fs-six-up mx-ch mx-auto">
                We&apos;re constantly improving our trading platform, trying to
                make it the best on the market.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-6 gy-xxl-0">
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ri-article-line fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Terms of Service</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <Link
                href="/terms-conditions"
                className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Learn More<i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ri-global-line fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Policies</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <Link
                href="/privacy-policy"
                className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Learn More<i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card secondary nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ri-shield-keyhole-line fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Security</h4>
              <p>
                Trading is not without its challenges, as markets can be highly
                volatile and unpredictable. It requires discipline
              </p>
              <Link
                href="/terms-conditions"
                className="cmn-btn link third-link fs-five  gap-2 gap-lg-3 align-items-center mt-5"
              >
                Learn More<i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
