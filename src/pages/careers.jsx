import Head from 'next/head'
import Layout from "../components/layout";

import Accordion from 'react-bootstrap/Accordion';

export default function Services() {
  const jobs = [{
    title: "Full Stack Developer (2 years)",
    desc: ".net core, angular, react, sql, postgress"
  },
  {
    title: "Front end Developer (2 years)",
    desc: "angular, react, javascript"
  }]

  return (
    <Layout>
      <div className="container px-4 py-5" id="featured-3">
        <div className="pb-2 text-center">
        <h2 >Current Openings</h2>
        <p>Send your profiles to hr@rrsoftsol.in</p>

        </div>
       
        <div class="row">

          <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">

            {
              jobs.map((service, index) =>
                <div key={index} class="d-flex py-3">
                  <div className="px-3 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg></div>
                  <div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p></div>
                </div>
              )
            }
          </div>
         
        </div>
      </div>


    </Layout>
  )
}
