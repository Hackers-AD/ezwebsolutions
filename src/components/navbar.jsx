import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';
import { useLocation } from "react-router-dom";
import { themeContext } from './context/themeContext';

const Navbar = () => {
    const {theme, toggleTheme} = useContext(themeContext);
    const ourtheme = theme === 'light' ? 'dark' : 'light';

    const location = useLocation();
    const hash = location.hash;
    const pathname = location.pathname;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    useEffect(() => {
        if(hash){
            let element = document.getElementById(hash.replace('#', ''))
            if(element){
                let pos = element.offsetTop;
                window.scrollTo({
                    top: pos,
                    behavior: "smooth",
                });
            }
        }else{
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [hash]);

    return ( 
        <nav className={"navbar navbar-expand-md navbar-"+theme+" bg-"+theme+" sticky-top"} id="navbar" >
            <div className="container">
                <Link to="/home"  className="navbar-brand">
                    <div className="align-items-center">
                        <img src="/img/logo6.png" alt="brandimage" className="brand-image border border-light rounded-pill" />
                        {/* <div className="fs-5 fw-bold ps-2">Ezweb Solutions</div>  */}
                    </div>
                </Link>
                <div className="d-flex">
                    <div className="nav-item px-2 d-md-none">
                        <button className={ 'btn btn-' + theme + ' btn-rounded-sm border border-warning'} onClick={toggleTheme}>
                            <i className="fa-solid fa-cog"></i>
                        </button>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item d-md-none">
                            <Link to='/#about' className="nav-link">About</Link>
                        </li>
                        <li className="nav-item d-md-none">
                            <Link to='/services' className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item d-md-none">
                            <Link to='/industries' className="nav-link">Industries</Link>
                        </li>

                        <li className="nav-item dropdown d-none d-md-block">
                            <Link className="nav-link dropdown-toggle" to="#" id="aboutdropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About
                            </Link>            
                            <ul className={"dropdown-menu bg-"+theme}>
                                <li className="">
                                    <Link to="/#about" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                        <i className="fa-solid fa-building"></i> Company Info
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/#ourteam" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                        <i className="fa-solid fa-people-group"></i> Our Team
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/#technologies" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                        <i className="fa-solid fa-computer"></i> Technologies
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to="/#focus" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                        <i className="fa-solid fa-briefcase"></i> Working Techniques
                                    </Link>  
                                </li>
                                <li className="">
                                    <Link to="/#career" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                        <i className="fa-solid fa-circle-plus"></i> Career Oppotunities
                                    </Link> 
                                </li>
                                <li className="">
                                    <Link to="/#contact" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                        <i className="fa-solid fa-mobile"></i> Contact Us
                                    </Link> 
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown position-static  d-none d-md-block" id="servicesdropdown">
                            <Link className="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </Link>
                            <ul className={"dropdown-menu w-100 bg-"+theme}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <li className="">
                                                <Link to="/services/software-and-web-development/" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-brands fa-app-store-ios"></i> Software and Web Development
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/data-analysis-and-visualization" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-chart-simple"></i> Data Analysis and Visualization
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/intelligent-system-for-bussiness" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-brain"></i> Intellegent System for Bussiness
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/AI-and-ML-based-system" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-chalkboard"></i> AI and ML Based System
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/android-and-iOS-app-development" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-store"></i> Android and iOS App Development
                                                </Link>
                                            </li>
                                        </div>
                                        <div className="col-lg-4">
                                            <li className="">
                                                <Link to="/services/code-and-devOps" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-code"></i>  Code and DevOps
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/anomaly-detection" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-hat-cowboy"></i> Anomaly Detection
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/predictive-analysis" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-magnifying-glass-chart"></i> Predictive Analysis
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/recommender-systems" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-puzzle-piece"></i> Recommender Systems
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/automation-and-IOT" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-robot"></i> Automation and Internet of Things
                                                </Link>
                                            </li>
                                        </div>
                                        <div className="col-lg-4">
                                            <li className="">
                                                <Link to="/services/industrial-AI-system" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-industry"></i> Industrial AI System
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/healthcare-management" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-briefcase-medical"></i> Health Care Management
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/intelligent-chatbots" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-brands fa-bots"></i> Intelligent Chatbots
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/natural-language-processing" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-hands-asl-interpreting"></i> Natural Language Processing
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/services/full-cycle-product-development" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-arrows-spin"></i> Full Cycle Product Development
                                                </Link>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item dropdown position-static d-none d-md-block">
                            <Link className="nav-link dropdown-toggle" to="/industries" id="industriesdropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Industries
                            </Link>
                            <ul className={"dropdown-menu w-100 bg-"+theme}>
                                <div className="container me-0">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <li className="">
                                                <Link to="/industries/healthcare" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-user-doctor"></i> Healthcare 
                                                </Link>              
                                            </li>
                                            <li className="">
                                                <Link to="/industries/education" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-graduation-cap"></i> Education
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/news" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-rss"></i> News
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/banking-and-finance" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-sack-dollar"></i> Banking and Finance
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/gaming-and-entertainment" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-gamepad"></i> Gaming and Entertainment
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/cybersecurity" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-brands fa-blackberry"></i> Cybersecurity
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/social-media-marketing" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-rectangle-ad"></i> Social Media Marketing
                                                </Link>
                                            </li>
                                        </div>
                                        <div className="col-lg-4">
                                            <li className="">
                                                <Link to="/industries/manufacturing" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-industry"></i> Manufacturing
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/ecommerce" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-cash-register"></i> Ecommerce
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/real-estate" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-sign-hanging"></i> Real Estate
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/aviation" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-plane-circle-exclamation"></i> Aviation
                                                </Link>
                                            </li>
                                            <li className="">
                                                <Link to="/industries/agriculture" className={"dropdown-item text-"+ourtheme+" py-3"}>
                                                    <i className="fa-solid fa-tractor"></i> Agriculture
                                                </Link>
                                            </li>
                                        </div>
                                        <div className="col-lg-4 d-none d-lg-block">
                                            <img src="/img/aboutbg.jpg" alt="bg" className="w-100 h-100" />                                            
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item px-2 d-none d-md-block">
                            <button className={ 'btn btn-' + theme + ' btn-rounded-sm border border-warning'} onClick={toggleTheme}>
                                <i className="fa-solid fa-cog"></i>
                            </button>
                        </li>
                        <div className="d-flex ps-3 d-none d-lg-block">
                            <Link to="/#contact">
                                <button className="btn btn-outline-warning btn-rounded-sm">Contact</button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>    
    );
}
 
export default Navbar;