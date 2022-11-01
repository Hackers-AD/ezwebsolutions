import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../navbar';
import Footer from '../footer';
import Frontend from "./frontend";
import Backend from "./backend";
import Database from "./database";
import WebServices from "./webServices";
import UiUxTools from "./uiuxtools";
import './technology.css';

const Technology = () => {
    return (
        <div className="">
            <Navbar />
                <div className="">
                    <div className="container position-absolute mx-3 top-50 start-50 translate-middle">
                        <div className='d-flex align-items-center h5'>
                            <div className='pe-3'><Link to='/home' className='nav-link'>Home</Link></div>
                            <i className="fa-solid fa-circle-chevron-right"></i>
                            <div className='px-3'>Technologies</div>
                            <i className="fa-solid fa-circle-chevron-right"></i>
                        </div>
                        <div className="h1">Technologies</div>
                    </div>
                    <img src="/img/bg.jpg" alt="" className="technologybg" />
                </div>
                <Frontend />
                <Backend />
                <Database />
                <WebServices />
                <UiUxTools />
            <Footer />
        </div>
    );
}
 
export default Technology;