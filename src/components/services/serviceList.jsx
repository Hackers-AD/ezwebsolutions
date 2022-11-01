import { Link } from "react-router-dom";

const ServiceList = () => {
    const services = ['Software and Web Development', 'Data Analysis and Visualization','Intellegent System for Bussiness',
                    'AI and ML Based System','Android and iOS App Development', 'Code and DevOps', 'Anomaly Detection',
                'Predictive Analysis', 'Recommender Systems', 'Automation and Internet of Things', 'Industrial AI System',
                'Health Care Management', 'Intelligent Chatbots', 'Natural Language Processing']
    return (
        <div className="container my-3">
            <div className="pt-2 pb-5">
                Our company delivers wide range of services in the different field of IT sectors.
                Either it's a simple website development or a complex machine learning model generation, our team gets the 
                job done in better approach. We also facilitate our customers with assurance of timely work delivery and servicing
                of works accomplished for lifelong.
            </div>
            <div className="row">
                {services.map((service,idx) => {
                    return(
                        <div className="col-md-4 py-2 text-center" key={idx}>
                            <Link to={"/services/" + service.toLowerCase().split(' ').join('-')} className="react-links">
                            <div className="border border-warning rounded p-3 servicelist-item">
                                <div className="d-flex justify-content-center">
                                    <div className="badge rounded-circle p-4 servicelist-badge">{idx < 9 ? '0'+(idx+1):idx+1}</div>
                                </div>
                                <div className="fw-bold py-2">{service}</div>
                                <div className="py-2">
                                    <button className="btn btn-outline-warning btn-rounded-lg">
                                        View <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default ServiceList;