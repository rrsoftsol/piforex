import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';

export default () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false)
  const onClick = () => setNavbarOpen(!navbarOpen)
  const services = [
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


  return (
  <>
    
    <header className="main-header">
       
        <div className="header-top">
            <div className="outer-container">
                <div className="support-box">
                    <div className="icon-box"><img src="images/icons/icon-1.png" alt=""></img></div>
                    <p><a href="tel:+9140-40050954">+9140-40050954</a> or Request for a <a href="tel:+9140-40050954"><span>call back</span></a></p>
                </div>
                <div className="text">
                    <div className="icon-box"><img src="images/icons/icon-2.png" alt=""></img></div>
                    <p> Get 24/7 Free Assistance</p>
                </div>
                <div className="right-column">
                    
                    <div className="help-center">
                        <div className="icon-box"><img src="images/icons/icon-4.png" alt=""></img></div>
                        <p><a href="/">Help Center</a></p>
                    </div>
                    <div className="language-box">
                        <div className="icon-box"><img src="images/icons/icon-5.png" alt=""></img></div>
                        <div className="select-box">
                            <select className="wide">
                               <option data-display="English">English</option> 
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="header-lower">
            <div className="outer-container">
                <div className="outer-box">
                    <div className="menu-area">
                        <div className="logo-box">
                            <figure className="logo"><a href="/"><img src="images/logo.png" alt=""></img></a></figure>
                        </div> 
                        <div className="mobile-nav-toggler">
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul className="navigation clearfix">
                                    <li className="current"><a href="/">Home</a>
                                       
                                    </li>  
                                    <li className="dropdown"><a href="/">Markets</a>
                                        <ul>
                                            <li><a href="markets.html">Markets</a></li>
                                            <li><a href="market-details.html">Details Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="/">Trading</a>
                                        <ul>
                                            <li><a href="platform.html">Platform</a></li>
                                            <li><a href="account.html">Our Accounts</a></li>
                                            <li><a href="account-details.html">Standard Account</a></li>
                                            <li><a href="account-details-2.html">Commision Account</a></li>
                                            <li><a href="account-details-3.html">STP Pro Account</a></li>
                                        </ul>
                                    </li> 
                                    <li className="dropdown"><a href="/">Education</a>
                                        <ul>
                                            <li><a href="education.html">Education</a></li>
                                            <li><a href="education-details.html">Detail Page</a></li>
                                        </ul>
                                    </li> 
                                    <li className="dropdown"><a href="/">About</a>
                                        <ul>
                                            <li><a href="about.html">Company</a></li>
                                            <li><a href="history.html">History</a></li>
                                            <li><a href="team.html">Team</a></li>
                                            <li className="dropdown"><a href="/">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">3 Columns</a></li>
                                                    <li><a href="blog-2.html">3 Columns Sidebar</a></li>
                                                    <li><a href="blog-3.html">List View 01</a></li>
                                                    <li><a href="blog-4.html">List View 02</a></li>
                                                    <li><a href="blog-details.html">Single Post</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="faq.html">Faq’s</a></li>
                                            <li><a href="error.html">404</a></li>
                                        </ul>
                                    </li>  
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="menu-right-content">
                        <div className="clients-box">
                            <div className="icon-box"><img src="images/icons/icon-6.png" alt=""></img></div>
                            <a href="/">Client Portal<i className="flaticon-right-down"></i></a>
                        </div>
                        <div className="btn-box"><a href="/" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="sticky-header">
            <div className="outer-container">
                <div className="outer-box">
                    <div className="menu-area">
                        <div className="logo-box">
                            <figure className="logo"><a href="/"><img src="images/logo.png" alt=""></img></a></figure>
                        </div>
                        <nav className="main-menu clearfix"> 
                        </nav>
                    </div>
                    <div className="menu-right-content">
                         <div className="clients-box">
                            <div className="icon-box"><img src="images/icons/icon-6.png" alt=""></img></div>
                            <a href="/">Client Portal<i className="flaticon-right-down"></i></a>
                        </div>
                        <div className="btn-box"><a href="/" className="theme-btn btn-one"><span>Open an A/c</span></a></div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>
        
        <nav className="menu-box">
            <div className="nav-logo"><a href="/"><img src="images/logo.png" alt="" title=""></img></a></div>
            <div className="menu-outer">hello</div>
            <div className="contact-info">
                <h4>Contact Info</h4>
                <ul>
                    <li>Chicago 12, Melborne City, USA</li>
                    <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                    <li><a href="mailto:info@example.com">info@example.com</a></li>
                </ul>
            </div>
            <div className="social-links">
                <ul className="clearfix">
                    <li><a href="/"><span className="fab fa-twitter"></span></a></li>
                    <li><a href="/"><span className="fab fa-facebook-square"></span></a></li>
                    <li><a href="/"><span className="fab fa-pinterest-p"></span></a></li>
                    <li><a href="/"><span className="fab fa-instagram"></span></a></li>
                    <li><a href="/"><span className="fab fa-youtube"></span></a></li>
                </ul>
            </div>
        </nav>
    </div>
    </>
  );
};
