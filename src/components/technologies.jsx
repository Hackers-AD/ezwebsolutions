import React from "react";
import { Link } from "react-router-dom";
import '../css/technology.css';

const Technologies = () => {
    const technologies = ['AI/ML', 'React', 'Python', 'Django', 'Google Firebase','Tensor Flow', 'React Native']
    return (
        <div className="container my-5" id="technologies" data-aos="fade-up">
           <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="h1">Use of Technologies</div>
                    <p>
                        Modern technologies are used in our products to enhance its reliability. 
                    </p>
                    <ul>
                        {technologies.map(t => {
                            return(
                                <li key={t} className="p-2">
                                    <Link to="#" className="nav-link">{t}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="p-3">
                        <Link to="/technologies" className="text-danger" style={{textDecoration: 'none'}}>
                            View all <i className="fa fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-3 py-2">
                            <img src="img/technologies/ai.jpg" alt="" className="technology-icons" />
                        </div>
                        <div className="col-3 py-2">
                            <img src="img/technologies/python.png" alt="" className="technology-icons" />
                        </div>
                        <div className="col-3 py-2">
                            <img src="img/technologies/django.png" alt="" className="technology-icons" />
                        </div>
                        <div className="col-3 py-2">
                            <img src="img/technologies/tensorflow.png" alt="" className="technology-icons" />
                        </div>
                        <div className="col-3 py-2">
                            <img src="img/technologies/firebase.png" alt="" className="technology-icons" />
                        </div>
                        <div className="col-3 py-2">
                            <img src="img/technologies/mysql.png" alt="" className="technology-icons" />
                        </div>
                        <div className="col-3 py-2">
                            <img src="favicon.ico" alt="" className="technology-icons" />
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}
 
export default Technologies;