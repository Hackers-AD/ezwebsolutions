import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/services.css';
import { app } from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ServicesList = () => {
    const [services, setServices] = useState(() => []);
    const db = getFirestore(app);

    const allServices = async() => {
        const docs = await getDocs(collection(db, 'services'));
        let data = []
        docs.forEach(doc => {
            data.push(doc.data());
        })
        setServices(data);
    }

    useEffect(() => {
        allServices();
    }, [])

    return (
        <div className="" id="services" data-aos="fade-up">
            <div className="service-header-container py-3">
                <div className="container">
                    <div className="h1">How may we help you?</div>
                    <p>
                        The extensive range of services we provide to our clients is our greatest strength.
                        Whether you need full-stack development or merely consulting, we can meet your needs.
                    </p>
                </div>
            </div>
            <div className="service-list-container py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="fs-3 fw-bold">Our Services</div>
                            <ul>
                                {services.map(s => {
                                    return(
                                        <li key={s.id} className="p-2">
                                            <Link to={"/services/"+s.name.toLowerCase().split(' ').join('-')} 
                                                className="nav-link">{s.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="p-3">
                                <Link to="/services" className="text-danger" style={{textDecoration: 'none'}}>
                                    View all <i className="fa fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="img/services.jpg" alt="" className="w-100 h-100" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ServicesList;