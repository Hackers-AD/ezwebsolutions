import React from "react";
import Navbar from '../navbar';
import { useParams } from "react-router-dom";
import HealthCare from "./healthcare";
import Footer from '../footer';
import Industries from "./industries";
import IndustryBanner from "./industryBanner";

const Industry = () => {
    const { name } = useParams()

    return (
        <React.Fragment>
            <Navbar />
            <IndustryBanner name={name} />
            {name ? null : <Industries />}
            {name === 'healthcare' ? <HealthCare name={name} /> : null}
            {name === 'education' ? <HealthCare name={name} /> : null}
            {name === 'news' ? <HealthCare name={name} /> : null}
            {name === 'banking-and-finance' ? <HealthCare name={name} /> : null}
            {name === 'gaming-and-entertainment' ? <HealthCare name={name} /> : null}
            {name === 'cybersecurity' ? <HealthCare name={name} /> : null}
            {name === 'social-media-marketing' ? <HealthCare name={name} /> : null}
            {name === 'manufacturing' ? <HealthCare name={name} /> : null}
            {name === 'real-estate' ? <HealthCare name={name} /> : null}
            {name === 'ecommerce' ? <HealthCare name={name} /> : null}
            {name === 'aviation' ? <HealthCare name={name} /> : null}
            {name === 'agriculture' ? <HealthCare name={name} /> : null}
            <Footer />
        </React.Fragment>  
    );
}
 
export default Industry;