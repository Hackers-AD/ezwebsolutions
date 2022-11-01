import React from "react";

const About = () => {
    return (
        <div className="container py-4" id="about">
            <div className="row align-items-center py-3">
                <div className="col-md-6 my-2">
                    <img src="img/about.png" alt="" className="w-100" />
                </div>
                <div className="col-md-6 my-2" data-aos="fade-up">
                    <div className="h1">About Us</div>
                    <div>
                        <p>
                            Ezweb Solutions have been providing the full fledge and efficient works since 2018. 
                            It's core motive is to provide the versatile platform where peoples can seriously build 
                            their dreams incollaboration with our highly professional teams to develop website to mobile apps.
                        </p>
                        <p>
                            Our highly skilled developers and engineers follows the dedicated pattern of work from careful plannning 
                            following perfect designing and then executing the work smartly to accomplish the project.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center py-3">
                <div className="col-md-6 order-2 order-md-1 my-2" data-aos="fade-up">
                    <div className="h1">Company</div>
                    <div>
                        <p>
                            Established in 2018, Ezweb Solutions is a progressive foresighted company for building the significant 
                            products and solutions needed for the 21st century. Our mission is to build a versatile platform to deliver 
                            almost everything that a person needed for thier personal or bussiness applications.
                        </p>
                        <p>
                            We provide the quality products and solutions for your bussiness within the almost affordable prices. Our engineering 
                            and developer teams posses very friendly nature that enhance the planning of your bussiness together in 
                            collaborations.
                        </p>
                    </div>
                </div>
                <div className="col-md-6 my-2 order-1 order-md-2">
                    <img src="img/company.png" alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
}
 
export default About;