import React from "react";
import Head from 'next/head';
import Script from 'next/script'
import Header from "./header.js";
import Footer from "./footer.js";

export default ({ children }) => {

    return (
        <div className="App">
            <Head>
                <title>PRIMA INFINITE FOREX TRADING Company - CURRENCY EXCHANGE SERVICES</title>
                <link rel="icon" href="/favicon-32x32.png" />
                <meta
                    name="description"
                    content="PRIMA INFINITE FOREX TRADING Company - CURRENCY EXCHANGE SERVICES."
                /> 

            </Head>
            <Header></Header>
            {children}
            <Footer></Footer>

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-RZH3V3P64V"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-RZH3V3P64V');

                        
                    (function(d,t) {
                    var BASE_URL="https://app.chatwoot.com";
                    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                    g.src=BASE_URL+"/packs/js/sdk.js";
                    g.defer = true;
                    g.async = true;
                    s.parentNode.insertBefore(g,s);
                    g.onload=function(){
                        window.chatwootSDK.run({
                        websiteToken: 'rXinRG2Zv2GbvFzmUcbhPLTf',
                        baseUrl: BASE_URL
                        })
                    }
                    })(document,"script"); 
  
                `}
            </Script>
        </div>
    );
};