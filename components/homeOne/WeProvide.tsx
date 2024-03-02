import button from "@/public/images/button.png";
import Image from "next/image";

export default function WeProvide() {
  return (
    <section className="provide-world bg nb4-bg pt-120 pb-120 position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1 d-none d-md-flex">
        <Image
          src={button}
          alt="vector"
          className="position-absolute pt-6 pt-xl-15 previewShapeRevX"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <span className="heading p1-color fs-five mb-5">
                We Provide World’s
              </span>
              <h3 className="mb-5 mb-lg-6">
                Join a club of more than{" "}
                <span className="s1-color"> 1,000</span> members
              </h3>
              <p className="fs-six-up mx-ch mx-auto">
              we offer you a straightforward platform to exchange your foreign currency with ease and convenience
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-6 gy-xxl-0">
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ri-medal-line fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Best Reputation</h4>
              <p>
              Get the best exchange rates around you compared across hundreds of banks and money changers.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ri-user-line fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">1,000+ Clients</h4>
              <p>
              you get transparent bank rates in secured and privacy transactions for you orders. we take stringest actions for data safety,
             
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xxl-4">
            <div className="provide-world__card nb3-bg text-center cus-rounded-1 py-5 py-lg-10 px-4 px-lg-9">
              <span className="provide-card__icon d-center nb4-bg p-4 rounded-circle mx-auto">
                <i className="ri-shield-check-fill fs-three p1-color"></i>
              </span>
              <h4 className="mt-5 mb-5">Trusted and Secure</h4>
              <p>
              Reliable and Verified RBI Authorized Banks Streamlined Online Forex order processing with live tracking of your Forex Order.
            
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
