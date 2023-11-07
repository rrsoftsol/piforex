import Head from 'next/head'
import Layout from "../../components/layout";
import Features from "../../components/features";

export default function Services() {
  const features = [
    {
      title: "Research and Testing ",
      desc: "We work on uncovering the deep and potential problems that a user could encounter."
    },
    {
      title: "Design Simple",
      desc: "Simplicity is most advanced design, Our designs deliver experiences. That's to ensure we do the best, always."
    },
    {
      title: "Best Practices and Frameworks",
      desc: "Simple changes applied through design can increase your revenues, and you no longer need to invest on support, if you have a good design in place"
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
            <h1 className="display-3 fw-bold lh-sm mb-3">User Experience.</h1>
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
