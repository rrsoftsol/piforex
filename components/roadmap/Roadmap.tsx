import { roadmapData } from "@/constants/roadmap";

export default function Roadmap() {
  return (
    <section className="roadmap pt-120 pb-120" id="roadmap">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <h1 className="display-four mb-5 mb-lg-6">Roadmap</h1>
              <p className="fs-six-up mx-ch mx-auto">
                We&apos;re constantly updating our roadmap to bring transparency
                for our users and to get your feedback - please tell us what is
                important for you!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="roadmap__content">
              <span className="roadmap__line"></span>

              {roadmapData.map(({ id, year, title, desc }, idx) => (
                <div className="roadmap__part" key={id}>
                  <div
                    className={`event cus-rounded-1 p-4 p-md-5 p-xxl-10 ${
                      idx % 2 === 0 ? "me-5" : ""
                    }`}
                  >
                    <span className="heading fs-three p1-color mb-3">
                      {year}
                    </span>
                    <h4>{title}</h4>
                    <p className="mt-4">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
