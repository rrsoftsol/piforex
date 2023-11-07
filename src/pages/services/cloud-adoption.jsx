import Head from 'next/head'
import Layout from "../../components/layout";
import Features from "../../components/features";

export default function Services() {

  const cloudServices = [
    {
      title: "Modernize legacy apps and UX ",
      desc: "Modernize and experience faster growth and benefits, using RR Softsol expertise in latest cutting edge technologies"
    },
    {
      title: " Migrate to Cloud Native",
      desc: "Begin with a Discovery & Envisioning Session to develop a roadmap that meets your budget, timeline, and motivations for cloud transformation."
    },
    {
      title: "Automate and Scale",
      desc: "Scale your cloud quickly with automated provisioning and tooling to build or migrate compliant apps."
    },
    {
      title: "Cloud applications maintenance & support",
      desc: "We have proven track record of maintaining and offering SLA driven suport for cloud applications."
    },

  ]

  return (
    <Layout>

      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/images/about.jpg" className="d-block mx-lg-auto img-fluid" alt="Cloud Adoption"></img>
          </div>
          <div className="col-lg-6">
            <h5 className="text-crr">Start Your Business</h5>
            <h1 className="display-3 fw-bold lh-sm mb-3">Cloud Adoption</h1>
            <p className="lead">Our Cloud Solutions provides a highly reliable, scalable, low-cost infrastructure platform that allows you to quickly innovate, experiment and iterate.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <Features></Features>

    </Layout>
  )
}
