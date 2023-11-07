import React from "react";

export default ({ features = null, heading = "RR Softsol Cloud Adoption features includes following features" }) => {

    const defaultFeatures = [
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
    features = features || defaultFeatures;

    return (

        <section id="features" class="features">
            <div class="container aos-init aos-animate">
                <div class="section-title text-center">
                    <h2>Features</h2>
                    <p>{heading}</p></div>
                <div class="row">

                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">

                        {
                            features.map((service, index) =>
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
                    <div class="image col-lg-6 order-1 order-lg-2 px-5">
                        <img src="/images/details-2.png" alt="" class="img-fluid" /></div>
                </div></div></section>
    );
};