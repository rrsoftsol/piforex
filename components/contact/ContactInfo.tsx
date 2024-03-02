import SocialIcons from "@/ui/SocialIcons";

export default function ContactInfo() {
  return (
    <div className="col-12 col-lg-5 col-xl-5">
      <div className="submissions-area d-flex flex-column gap-8 gap-lg-10">
        <div className="submissions">
          <h3>For any inquiries, concerns, or assistance</h3>
          <p className="fs-six-up mt-4">
          The dedicated team at Pi Forex is readily available to help. 
          Please feel free to reach out to our customer support team at 
          </p>
        </div>
        <div className="contact__mail d-flex flex-column gap-5 gap-lg-6 pb-8 pb-lg-10 border-bottom border-color four">
          <div className="d-flex align-items-center gap-3">
            <span className="box_12 p1-bg rounded-circle d-center">
              <i className="ri-message-3-line fs-four-up nb4-color"></i>
            </span>
            <span className="fs-six-up">info@piforex.com</span>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span className="box_12 p1-bg rounded-circle d-center">
              <i className="ri-phone-line fs-four-up nb4-color"></i>
            </span>
            <span className="fs-six-up">1800 889 2499</span>
          </div>
        </div>
        <div className="submissions">
          <h3>Our socials media</h3>
          <ul className="social-area d-center justify-content-start gap-2 gap-md-3 mt-7 mt-lg-8">
            <SocialIcons />
          </ul>
        </div>
      </div>
    </div>
  );
}
