import React from "react";
import Navbar from "../navbar";
import { useParams } from "react-router-dom";
import './services.css';
import ServiceBanner from "./servicebanner";
import ServiceList from "./serviceList";
import SoftwareWebDevelopment from "./software-and-web-development";
import DataAnalysisVisualization from "./data-analysis-and-visualization";
import BusinessIntelligence from "./intelligent-system-for-business";
import AiMlSystem from "./ai-ml-based-system";
import Footer from '../footer';
import AndroidIosApp from "./android-ios-app-development";

const Service = () => {
    const { name } = useParams()
    
    return (
        <div>
            <Navbar />
            <ServiceBanner name={name} />
            {name ? '': <ServiceList />}
            {name === 'software-and-web-development' ? <SoftwareWebDevelopment name={name}/> : null}
            {name === 'data-analysis-and-visualization' ? <DataAnalysisVisualization name={name}/> : null}
            {name === 'intelligent-system-for-bussiness' ? <BusinessIntelligence name={name}/> : null}
            {name === 'AI-and-ML-based-system' ? <AiMlSystem name={name}/> : null}
            {name === 'android-and-iOS-app-development' ? <AndroidIosApp name={name}/> : null}

            {name === 'code-and-devOps' ? <SoftwareWebDevelopment name={name}/> : null}
            {name === 'anomaly-detection' ? <DataAnalysisVisualization name={name}/> : null}
            {name === 'predictive-analysis' ? <BusinessIntelligence name={name}/> : null}
            {name === 'recommender-systems' ? <AiMlSystem name={name}/> : null}
            {name === 'automation-and-IOT' ? <AndroidIosApp name={name}/> : null}
            {name === 'industrial-AI-system' ? <SoftwareWebDevelopment name={name}/> : null}
            {name === 'healthcare-management' ? <DataAnalysisVisualization name={name}/> : null}
            {name === 'intelligent-chatbots' ? <BusinessIntelligence name={name}/> : null}
            {name === 'natural-language-processing' ? <AiMlSystem name={name}/> : null}
            {name === 'full-cycle-product-development' ? <AndroidIosApp name={name}/> : null}
            <Footer />
        </div>
    );
}
 
export default Service;