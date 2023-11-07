import React from "react";

export default ({ services = null, heading = "What We do" }) => {

    const defaultServices = [
        {
            title: "Cloud Adoption",
            desc: "Our Cloud Solutions provides a highly reliable, scalable, low-cost infrastructure platform that allows you to quickly innovate, experiment and iterate",
            url:"/services/cloud-adoption",
            className: "blue"
        },
        {
            title: "Digital Transformation",
            desc: "Digital transformation takes a customer-driven, digital-first approach to all aspects of a business, from its business models to customer experiences to processes and operations.",
            url:"/services/digital-transformation",
            className: "orange"
        }
        , {
            title: "Product Engineering",
            desc: "We help you with every aspect under full-cycle product engineering with ease, ensuring that your ideas are well-executed.",
            url:"/services/product-engineering",
            className: "yellow"
        },
        {
            title: "App Modernization",
            desc: "We help clients navigate the journey by understanding their current application landscape and outlining a strategy that aligns to long-term business goals.",
            url:"/services/app-modernization",
            className: "pink"
        },
        {
            title: "User Experience",
            desc: "We have a wealth of UX and UI talent, experts in usability, accessibility, information architecture, interaction design, and visual design.",
            url:"/services/user-experience",
            className: "red"
        },
        {
            title: "Dedicated Teams",
            desc: "Significant cost savings and time-to-market reduction are the advantages of dedicated teams and offshore software development services.",
            url:"/services/dedicated-teams",
            className: "teal"
        },

    ]

    services = services || defaultServices;

    return (
        <section id="services" className="services py-4">
            <div className="container" >
                <header className="pb-2 mb-2 text-center section-header position-relative">
                    <h2>{heading}</h2>
                </header>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    {
                        services.map((service) =>


                            <div className="col d-flex justify-content-center align-items-stretch" >
                                <div className={"icon-box text-center shadow p-3 iconbox-" + service.className}>
                                    <div className="icon p-5">
                                        <svg className="position-absolute" width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path> </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" class="bi bi-cloud" viewBox="0 0 16 16">
                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                        </svg>
                                    </div>
                                    <h4 className="p-3">
                                        <a href={service.url}>{service.title}</a>
                                    </h4>
                                    <p>{service.desc}</p>
                                </div></div>

                        )
                    }
                </div>
            </div>
        </section>
    );
};