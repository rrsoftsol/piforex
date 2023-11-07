import Head from 'next/head'
import Layout from "../../components/layout";
import Features from "../../components/features";

export default function Services() {
  const features = [
    {
        title: "Modern Digital Workplace",
        desc: "Enhance the way your employees work every day and maximize productivity."
    },
    {
        title: "Accelerate Digital Transformation",
        desc: "Unleash the power of citizen developers. Build solutions quickly, and at low cost."
    }, 
    {
        title: " Business Process Automations",
        desc: "Create intelligent automations to replace & streamline the legacy processes."
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
            <h1 className="display-3 fw-bold lh-sm mb-3">Digital Transformation.</h1>
            <p className="lead">SHAPING YOUR BUSINESS FUTURE WITH DIGITAL TRANSFORMATION SOLUTIONS.</p>
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
