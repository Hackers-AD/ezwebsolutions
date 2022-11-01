import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();
    const handleBackBtn = () => {
        navigate(-1);
    }
    
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6 p-0 pt-5 shadow-lg">
                    <div className="p-3">
                        <div className="fs-3">
                            <span className="text-danger"><i className="fa-solid fa-circle-exclamation"></i></span>
                            <span> 404 Error:</span> <span className="text-danger">Page not found!</span>
                        </div>
                        <div className="">Sorry!! requested page doesn't exist.</div>
                        <div className="d-flex py-3">
                            <div className="p-2">
                                <button className="btn btn-outline-warning btn-rounded-lg" onClick={handleBackBtn}>
                                    <i className="fa-solid fa-arrow-left"></i> Back
                                </button>
                            </div>
                            <div className="p-2">
                                <Link to="/home">
                                    <button className="btn btn-outline-warning btn-rounded-lg">Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img src="/img/404error.jpg" alt="" className="w-100" />
                </div>
            </div>
        </div>
    );
}
 
export default Error404;