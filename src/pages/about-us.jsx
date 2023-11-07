import Head from 'next/head'
import Layout from "../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {
 

  return (
    <Layout>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/images/about.jpg" className="d-block mx-lg-auto img-fluid" alt="RR Softsol About us"></img>
          </div>
          <div className="col-lg-6">
            <h5 className="text-crr">ABOUT RR SOFTSOL</h5> 
            <p className="lead">We are a dynamic and innovative software company that specializes in developing cutting-edge software 
            solutions for businesses of all sizes. Our team of experienced and talented developers, designers, and project 
            managers are passionate about creating software that meets the unique needs of each and every client we work with.</p>
             
             <p className="lead">
             At our core, we are problem solvers. We understand that technology is constantly evolving and businesses need to adapt quickly in order to stay ahead. That's why we work closely with our clients to understand their goals, 
             challenges, and opportunities, so that we can deliver software solutions that help them achieve their objectives.
             </p>
          </div>
        </div>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          <div className="col-lg-12"> 
            <p className="lead">
            Our company was founded on the principle of providing exceptional customer service. We believe that strong relationships with our clients are the key to success. That's why we pride ourselves on being responsive, flexible, and easy to work with. We strive to make
             the software development process as seamless as possible, from the initial consultation to the final delivery of the product.
              </p>
             
             <p className="lead">
             We are committed to staying up-to-date with the latest technology trends and best practices. Our team is constantly learning and exploring new ways to improve our software development processes and deliver even better results to our clients. We believe that a commitment to innovation is essential to staying competitive in today's fast-paced business environment.

              </p>
              <p className="lead">
              Our software solutions are designed to be scalable and customizable, ensuring that they can adapt to the changing needs of our clients over time. Whether you need a simple web application or a complex enterprise solution, we have the expertise and experience to deliver high-quality software that meets your requirements.

              </p>
              <p className="lead">
              Thank you for considering our company for your software development needs. We look forward to the opportunity to work with you and help you achieve your business goals.

              </p>
          </div>
        </div>
      </div>  

    </Layout>
  )
}
