import Head from 'next/head'
import Layout from "../components/layout";
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Services() {


  return (
    <Layout>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 text-center">Our Pricing</h2>

        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Company Registrations</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">12500<small className="text-muted fw-light">/company</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>MCA Registrations</li>
                    <li>Digital Signature</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">GST Services</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">12500<small className="text-muted fw-light">/company</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>GST Filings</li> 
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">FCRA Services</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">Custom<small className="text-muted fw-light">/company</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>FCRA Filings</li> 
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>


    </Layout>
  )
}
