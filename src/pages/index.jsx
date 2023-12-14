import Head from 'next/head'
import Layout from "../components/layout"; 
import Pricing from "../components/pricing"; 

import ServiceSection from "../components/services"; 

export default function Home() {

  const iconGRid = [
    {
      title: "Track Record",
      desc: "We'll file the paperwork and file on your behalf."
    },
    {
      title: "Get Your Clarifications",
      desc: "It’s usual to hear back from support agents within the hour."
    },
    {
      title: "24*7 Support",
      desc: "Higlly available teams."
    }, {
      title: "Problem Free",
      desc: "you wont look for another comany again."
    }
  ];

  return (


    <Layout>
      
      <section className="banner-section">
            <div className="banner-carousel owl-theme owl-carousel nav-style-one">
                <div className="slide-item">   
                <div class="bg-layer" style={{backgroundImage:"url('images/banner/banner-1.jpg')"}}></div>
                    <div class="image-layer" style={{backgroundImage:"url('images/banner/banner-2.jpg')"}}></div>
                    <div className="large-container">
                        <div className="content-box">
                            <h2><span>Buy or Sell</span> <br />Foreign currency at live exchange rate</h2>
                            <div className="btn-box">
                                <a href="/" className="theme-btn btn-two"><span>Live Rates</span></a>
                            </div>
                            <div className="highlights-box">
                                <div className="single-item">
                                    <span className="count-text">01.</span>
                                    <h3>Forex</h3>
                                    <div className="text">Temporibus autem quibusda et officiis commodi debitis aut rerum necessitatibu.</div>
                                    <a href="/"><span>Read More</span></a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </div>
           
        </section>
        <section className="about-section">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <figure className="image-box"><img src="images/about-1.jpg" alt=""></img></figure>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <span className="sub-title">About PRIMA INFINITE FOREX</span>
                                <h2>In a Fast Moving <br />Market Choose a <span>Stable Broker</span></h2>
                            </div>
                            <div className="inner-box">
                                <p>Minus id quod maxime place at facere possimus, omnis voluptas assu- menda omnis dolors repellendus tempor.</p>
                                <div className="quote-box"><h4>Everything you need to trade Forex in one place</h4></div>
                                <p>Placeat facere possimus omnis voluptas assumenda,</p>
                                <ul className="list-item clearfix">
                                    <li>Scalper</li>
                                    <li>Day Trader</li>
                                    <li>Position Trader</li>
                                    <li>The Swing Trader</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="trading-section sec-pad">
            <div className="pattern-layer"> 
            </div>
            <div className="auto-container">
                <div className="sec-title centred light"> 
                    <h2>The PI Forex Advantage over other banks</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 trading-block">
                        <div className="trading-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="images/icons/icon-7.png" alt=""></img></div>
                                <div className="overlay-icon"><img src="images/icons/icon-8.png" alt=""></img></div>
                                <div className="text">
                                    <h3><a href="/">Best Rates</a></h3>
                                    <p>Get the best exchange rates around you compared across hundreds of banks and money changers</p>
                                </div>
                                <div className="lower-text"><h6><span>*</span>Save 2.5% - 6.5% over banks & money changers.</h6></div>
                                <div className="link-box"><a href="/"><span>More</span></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 trading-block">
                        <div className="trading-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="images/icons/icon-9.png" alt=""></img></div>
                                <div className="overlay-icon"><img src="images/icons/icon-10.png" alt=""></img></div>
                                <div className="text">
                                    <h3><a href="/">Reliable</a></h3>
                                    <p>Reliable and  Verified RBI Authorized Banks

Streamlined Online Forex order processing with live tracking of your Forex Order.</p>
                                </div>
                                <div className="lower-text"><h6><span>*</span>Best Customer Service.</h6></div>
                                <div className="link-box"><a href="/"><span>More</span></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 trading-block">
                        <div className="trading-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><img src="images/icons/icon-11.png" alt=""></img></div>
                                <div className="overlay-icon"><img src="images/icons/icon-12.png" alt=""></img></div>
                                <div className="text">
                                    <h3><a href="/">Transparent</a></h3>
                                    <p>you get transparent bank rates in secured and privacy transactions for you orders. we take stringest actions for data safety </p>
                                </div>
                                <div className="lower-text"><h6><span>*</span> Your data is safe.</h6></div>
                                <div className="link-box"><a href="/"><span>More</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        <Pricing></Pricing>

        <section className="working-section sec-pad centred">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">How it’s Work</span>
                    <h2><span>Start Trading</span> on Your Terms</h2>
                </div>
                <div className="content-inner clearfix">
                    <div className="working-block-one">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="icon-box"><img src="images/icons/icon-17.png" alt=""></img></div>
                                <h4>Open <br />your account</h4>
                                <p>Beguiled demoralized all...</p>
                            </div>
                            <div className="overlay-content">
                                <h4>Open <br />your account</h4>
                                <p>Beguiled demoralized all Temporibus aute quibusda aut officiis debitis.</p>
                            </div>
                            <span className="count-text">Step 01</span>
                        </div>
                        <div className="link"><a href="/"><i className="flaticon-right-arrow"></i></a></div>
                    </div>
                    <div className="working-block-one">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="icon-box"><img src="images/icons/icon-18.png" alt=""></img></div>
                                <h4>Select a <br />currency pair</h4>
                                <p>Minus id maxime placeat...</p>
                            </div>
                            <div className="overlay-content">
                                <h4>Select a <br />currency pair</h4>
                                <p>Minus id maxime placeat Temporibus aute quibusda aut officiis debitis.</p>
                            </div>
                            <span className="count-text">Step 02</span>
                        </div>
                        <div className="link"><a href="/"><i className="flaticon-right-arrow"></i></a></div>
                    </div>
                    <div className="working-block-one">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="icon-box"><img src="images/icons/icon-19.png" alt=""></img></div>
                                <h4>Analyze <br />the market</h4>
                                <p>Itaque earu rerum tenetur...</p>
                            </div>
                            <div className="overlay-content">
                                <h4>Analyze <br />the market</h4>
                                <p>Itaque earu rerum tenetur Temporibus aute quibusda aut officiis debitis.</p>
                            </div>
                            <span className="count-text">Step 03</span>
                        </div>
                        <div className="link"><a href="/"><i className="flaticon-right-arrow"></i></a></div>
                    </div>
                    <div className="working-block-one">
                        <div className="inner-box">
                            <div className="static-content">
                                <div className="icon-box"><img src="images/icons/icon-20.png" alt=""></img></div>
                                <h4>Trade <br />& make money</h4>
                                <p>perferen doloribus asperio...</p>
                            </div>
                            <div className="overlay-content">
                                <h4>Trade <br />& make money</h4>
                                <p>perferen doloribus asperio Temporibus aute quibusda aut officiis debitis.</p>
                            </div>
                            <span className="count-text">Step 04</span>
                        </div>
                    </div>
                </div>
                <div className="lower-content">
                    <p>Everything you need to trade Forex in one place.</p>
                    <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image" data-caption=""><i className="flaticon-play"></i>How to Trade</a>
                </div>
            </div>
        </section>
        <section className="chooseus-section centred">
            <div className="bg-layer" ></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 content-column">
                        <div className="content-box">
                            <div className="sec-title light"> 
                                <h2>Business to <span>Business</span></h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="shape">
                                            <div class="shape-1" style={{backgroundImage:"url('images/shape/shape-4.png')"}}></div>
                                            <div class="shape-2" style={{backgroundImage:"url('images/shape/shape-5.png')"}}></div>
                                            <div class="shape-3" style={{backgroundImage:"url('images/shape/shape-6.png')"}}></div>
                                           
                                            </div>
                                            <h3><a href="/">Educational Consultant</a></h3>
                                            <p>Be one stop solution for your students, book your forex requirements online</p>
                                            <div className="icon-box"><img src="images/icons/icon-21.png" alt=""></img></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="shape">
                                            <div class="shape-1" style={{backgroundImage:"url('images/shape/shape-4.png')"}}></div>
                                            <div class="shape-2" style={{backgroundImage:"url('images/shape/shape-5.png')"}}></div>
                                            <div class="shape-3" style={{backgroundImage:"url('images/shape/shape-6.png')"}}></div>
                                           
                                            </div>
                                            <h3><a href="/">Travel Agent</a></h3>
                                            <p>You can book forex on behalf Customers.</p>
                                            <div className="icon-box"><img src="images/icons/icon-22.png" alt=""></img></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="shape">
                                            <div class="shape-1" style={{backgroundImage:"url('images/shape/shape-4.png')"}}></div>
                                            <div class="shape-2" style={{backgroundImage:"url('images/shape/shape-5.png')"}}></div>
                                            <div class="shape-3" style={{backgroundImage:"url('images/shape/shape-6.png')"}}></div>
                                           
                                            </div>
                                            <h3><a href="/">Corporate</a></h3>
                                            <p>When your employess travel abroad,  book your forex requirements online</p>
                                            <div className="icon-box"><img src="images/icons/icon-23.png" alt=""></img></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="faq-section sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Faq’s</span>
                    <h2>Find <span>Answers</span> to Common <br />Questions</h2>
                </div>
                <div className="inner-box">
                    <ul className="accordion-box">
                        <li className="accordion block active-block">
                            <div className="acc-btn active">
                                <div className="icon-box"><i className="flaticon-plus"></i></div>
                                <span>01</span>
                                <h4>How can I start trading Forex?</h4>
                                <p>Molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas...</p>
                            </div>
                            <div className="acc-content current">
                                <div className="text">
                                    <p>Molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas Temporibus autem quibusdam et aut officiis debitis.</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className="acc-btn">
                                <div className="icon-box"><i className="flaticon-plus"></i></div>
                                <span>02</span>
                                <h4>How much money do I need to start?</h4>
                                <p>Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur...</p>
                            </div>
                            <div className="acc-content">
                                <div className="text">
                                    <p>Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className="acc-btn">
                                <div className="icon-box"><i className="flaticon-plus"></i></div>
                                <span>03</span>
                                <h4>What is margin?</h4>
                                <p>Laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem...</p>
                            </div>
                            <div className="acc-content">
                                <div className="text">
                                    <p>Laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className="acc-btn">
                                <div className="icon-box"><i className="flaticon-plus"></i></div>
                                <span>04</span>
                                <h4>Can I lose more than I invest in Forex?</h4>
                                <p>Optio cumque nihil impedit quo minus id quod maxime placeat facere...</p>
                            </div>
                            <div className="acc-content">
                                <div className="text">
                                    <p>Optio cumque nihil impedit quo minus id quod maxime placeat facere commodo Nunc tempor amet massa diam mauris Risus sodales interdum.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="link-box centred">
                    <a href="faq.html"><span>Read More</span></a>
                </div>
            </div>
        </section>
    </Layout>
  )
}
