import Head from 'next/head'
import Layout from "../../components/layout";
import Features from "../../components/features";

export default function Services() {

  const features = [
    {
      title: "Modernize legacy apps and UX ",
      desc: "Modernize and experience faster growth and benefits, using RR Softsol expertise in latest cutting edge technologies"
    },
    {
      title: "Migrate to Cloud Native",
      desc: "Begin with a Discovery & Envisioning Session to develop a roadmap that meets your budget, timeline, and motivations for cloud transformation."
    },
    {
      title: "Introduce DevOps",
      desc: "Quickly deploy apps with automated provisioning and scale them when needed."
    },
    {
      title: "Agile Methodologies",
      desc: "Using Agile Methodologies shrim the release lify cycle of your apps, and quickly make it to market."
    }
  ]

  return (
    <Layout>

      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="/images/about.jpg" className="d-block mx-lg-auto img-fluid" alt="Cloud Adoption"></img>

          </div>
          <div className="col-lg-6">
            <h1 className="display-3 fw-bold lh-sm mb-3">App Modernization.</h1>
            <p className="lead">We are We are engrossed in providing high quality and reliable consultancy services for company registration.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <Features features={features}></Features>

    </Layout>
  )
}
