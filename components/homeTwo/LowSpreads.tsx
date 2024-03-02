import Image from "next/image";
import vector from "@/public/images/vector.png";
import vector9 from "@/public/images/vector9.png";
import vectorRocket from "@/public/images/vector_rocket.png";

export default function LowSpreads() {
  return (
    <section className="provide-world pt-120 pb-120  position-relative z-0">
      <div className="animation position-absolute top-0 left-0 w-100 h-100 z-n1">
        <Image
          src={vector}
          alt="vector"
          className="position-absolute top-0 pt-120 ms-20 ps-xxl-20 jello d-none d-xl-flex"
        />
        <Image
          src={vector9}
          alt="vector"
          className="position-absolute rotate top-0 end-0 p-20 mt-5 me-7 d-none d-xxxl-flex"
        />
        <Image
          src={vectorRocket}
          alt="vector"
          className="position-absolute bottom-0 start-0 d-none d-xxxl-flex pb-120 mb-10 ms-20 fadeInTopRight"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-7">
            <div className="heading__content mb-10 mb-lg-15 text-center">
              <h3 className="mb-5 mb-lg-6">
                Low spreads on more than 150 instruments{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-6 gy-xxl-0">
          <div className="col-12">
            <iframe
              src="https://www.tradingview-widget.com/embed-widget/forex-heat-map/?locale=in#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A400%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22utm_source%22%3A%22shiningstarmarkets.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-heat-map%22%2C%22page-uri%22%3A%22shiningstarmarkets.com%2F%22%7D"
              title="forex heat-map TradingView widget"
              lang="en"
              className="custom-tradingview-widget"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
