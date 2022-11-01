import { Link } from "react-router-dom";

const ServiceBanner = ({name}) => {

    return (
        <div id="carouselbg" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active servicesbg-container">
                    <div className="carousel-caption text-start">
                        <div className="row justify-content-center py-5">
                            <div className="col-md-7 w-100">
                                <div className='d-flex align-items-center h5'>
                                    <div className='pe-3'><Link to='/home' className='nav-link'>Home</Link></div>
                                    <i className="fa-solid fa-circle-chevron-right"></i>
                                    <div className='px-3'><Link to='/services' className='nav-link'>Services</Link></div>
                                    <i className="fa-solid fa-circle-chevron-right"></i>
                                </div>
                                <div className="h1 text-capitalize">{name ? name.split('-').join(' '): 'Ezweb Solution Services'}</div>
                                <div>
                                    {/* Artificial Intelligence and Machine Learning Based Apps and Business Solutions. */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ServiceBanner;