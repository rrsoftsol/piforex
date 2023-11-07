import Head from 'next/head'
import Layout from "../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {

  const iconGRid = [
    {
      title: "Chat With Us",
      desc: "We are always happy to chat with you during our business hours: Mon - Sat: 8am - 8pm"
    },
    {
      title: "Call Us",
      desc: "You can call our team during our business hours Landline: 9140-40050954  Phone: +91-9985100360"
    },
    {
      title: "Email Us",
      desc: "Send an email with your questions to our  CRR team.  Email: info@rrsoftsol.in"
    }
  ];

  return (
    <Layout>

      <div className="px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold">We help your digital transformation take place.</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Our team of business experts is here to answer any questions about starting and growing your business..</p>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row text-center">
          <div className="col-lg-6">
            <div className="shadow p-5 mb-4">
              <div className="text-primary py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg> </div>
              <h3>Our Address</h3>
                <div>Plot  No.49B, Sairaj Towers</div>
                <div> Beside Mercedes Benz Showroom</div>
                <div>  Kavuri Hills, Hyderabad-500081</div>
              
              </div>
              </div>
          <div className="col-lg-3 col-md-6"><div className="shadow p-5 mb-4">
            <div className="text-primary py-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg> </div>
            <h3>Email Us</h3><p>info@rrsoftsol.in</p></div></div><div className="col-lg-3 col-md-6">
            <div className="shadow p-5 mb-4">
              <div className="text-primary py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg> </div>
              <h3>Call Us</h3><p>+91 40-40050954</p></div></div>
        </div>

        <div className="row"><div className="col-lg-6 ">
          <iframe className="mb-4 mb-lg-0 w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4362903011815!2d78.39198632401249!3d17.438819949818495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a3778445e7%3A0xd267ce7c464853f5!2sRIYAREDDY%20SOFTSOL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1679296014694!5m2!1sen!2sin"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>          
      </div>
               <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="shadow p-3">
              <div className="row"><div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="" /></div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required="" /></div></div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" /></div>
              <div className="form-group mt-3"><textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
              </div>

              <div className="text-center mt-3"><button type="submit" className="btn btn-primary">Send Message</button></div></form></div></div>
      </div>


    </Layout>
  )
}
