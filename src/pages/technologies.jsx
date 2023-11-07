import Head from 'next/head'
import Layout from "../components/layout";

import Accordion from 'react-bootstrap/Accordion';

export default function Services() {

  const tech = [{ title: "Azure" }, { title: "Aws" },{ title: "SAP" },  { title: ".Net Core" }, { title: "Angular" }, { title: "React" }, { title: "Micro Services" },

  { title: "Jamstack websites" }, { title: "Apache Kafka" }, { title: "Micro Services" },]

  return (
    <Layout>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 text-center">Our Technologies</h2>
        <div className='row'>

          {tech.map((item) =>
            <div className='col-md-3' >
              <div className=' card shadow p-4 m-3'>
                <div className="card-body">
                  <h5 className="card-title"> {item.title}</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    </Layout>
  )
}
