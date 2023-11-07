import React from "react";


function FooterSection(links = []) {
  return (
    <>
      {links.links.map((link, index) =>
        <li key={index.toString()} className="nav-item mb-2"><a href={link.url} className="nav-link p-0 ">{link.title}</a></li>
      )
      }
    </>
  )
}

export default () => {

  const footerlinks = {
    sections: [
      {
        title: 'Our Capabilities',
        links: [
          {
            title: "Cloud Adoption",

            url: "/services/cloud-adoption"
          },
          {
            title: "Digital Transformation",

            url: "/services/digital-ransformation"
          },
          {
            title: "App Modernization",

            url: "/services/app-modernization"
          },
          {
            title: "User Experience",

            url: "/services/user-experience"
          }
        ]
      }, {
        title: 'Company',
        links: [{ title: 'Home', url: '/' }, { title: 'About', url: '/about-us' }, { title: 'Contact', url: '/contact-us' },]
      },]
  }
  return (
    <> 
        <footer className="main-footer">
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Our Community</h3>
                                </div>
                                <div className="widget-content">
                                    <p>Here you'll find regular market updates, expert tips & stories.</p>
                                     
                                    <h3>Follow us</h3>
                                    <ul className="social-links clearfix">
                                        <li><a href="/"><i className="fa-brands fa-facebook"></i></a></li>
                                        <li><a href="/"><i className="fa-brands fa-square-twitter"></i></a></li>
                                        <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="/"><i className="fa-brands fa-square-pinterest"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                            <ul className="links-list clearfix">
                                                <li><a href="/">About Us</a></li>
                                                <li><a href="/">Careers</a></li>
                                                <li><a href="/">Meet Our Team</a></li>
                                                <li><a href="/">Process</a></li>
                                                <li><a href="/">Mission & Vision</a></li>
                                                <li><a href="/">Faq’s</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                                            <ul className="links-list clearfix">
                                                <li><a href="/">Education</a></li>
                                                <li><a href="/">Trading Tools</a></li>
                                                <li><a href="/">Pricing List</a></li>
                                                <li><a href="/">Accout Types</a></li>
                                                <li><a href="/">Legal Notice</a></li>
                                                <li><a href="/">Privacy Policy</a></li>
                                                <li><a href="/">Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget assistance-widget">
                                <div className="widget-content">
                                    <h3>Need assistance?</h3>
                                    <p>Live chat with our service team for information & assistance.</p>
                                    <div className="assistance-box">
                                        <figure className="assistance-thumb"><img src="images/resource/assistance-1.jpg" alt=""></img></figure>
                                        <h5>Live Chat With</h5>
                                        <div className="link-box"><a href="/"><span>Expert</span></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <div className="copyright">
                            <p>&copy; <span>2023 <a href="/">PRIMA INFINITE FOREX</a>.</span> All Rights Reserved.</p>
                        </div>
                        <ul className="footer-card clearfix">
                            <li><a href="/"><i className="flaticon-symbols"></i></a></li>
                            <li><a href="/"><i className="flaticon-tool"></i></a></li>
                            <li><a href="/"><i className="flaticon-money"></i></a></li>
                            <li><a href="/"><i className="flaticon-symbol"></i></a></li>
                            <li><a href="/"><i className="flaticon-symbols-1"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer> 
        <button className="scroll-top scroll-to-target" data-target="html">
            <i className="flaticon-up-arrow"></i>
        </button>
    </>
  );
};
