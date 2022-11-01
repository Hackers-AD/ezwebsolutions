import React from "react";
import { Link } from "react-router-dom";
import '../css/mission.css';

const Mission = () => {

    return (
        <div className="container my-3" id="mission" data-aos="fade-up">
            <div className="">
                <div className="h1 py-3 ">Our goal is to make AI available to every business.</div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12 order-md-1">
                                We are a data science and analytics consulting company that offers technical and software solutions powered by AI 
                                to organizations looking to use data and machine learning algorithms to grow their operations.
                            </div>
                            <div className="col-md-6 py-2 order-md-2 d-none">
                                <img src="/img/mission.jpeg" alt="" className="w-100 h-100" /> 
                            </div> 
                            <div className="col-md-12 pt-3 order-md-4">
                                We are a company that specializes in artificial intelligence, and our main areas of interest include computer vision, 
                                machine learning, and intelligent automation. We support businesses in using AI to innovate, improve consumer insights, 
                                automate procedures, and cut costs. This is made possible by the employment of exclusive technology, 
                                first-rate customer service, ongoing investments in the development of personnel, and our own R&D facility. 
                            </div>
                            <div className="col-md-6 py-2 order-md-3 d-md-none">
                                <img src="/img/ai.jpg" alt="" className="w-100 h-100" /> 
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="py-3">
                    <Link to="/industries" className="text-danger" style={{textDecoration: 'none'}}>
                        View all industries <i className="fa fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Mission;