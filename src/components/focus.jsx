import React from "react";
import '../css/focus.css';

const Focus = () => {
    const focuses = [
        {action: "Careful Planning", icon: "fa-pen-to-square", des: "First, we carefully make the planning of work to do."},
        {action: "Perfect Design", icon: "fa-compass-drafting", des: "Secondly, we make the perfect design as per plan."},
        {action: "Smart Execution", icon: "fa-rocket", des: "Lastly, the modeled work is executed smartly."},
    ]
    return (
        <div className="container my-5" id="focus" data-aos="fade-up">
            <div className="">
                <div className="h1">Major Focus for Quality Acheivement</div>
                <p>
                    To acheive the quality in projects, we step through the sequential path of planning, designing and 
                    executing.
                </p>
            </div>
            <div className="row align-items-end">
                {focuses.map((focus, idx) => {
                    return(
                        <div className="col-md-4 text-center py-2" key={idx}>
                            <div className="border border-warning rounded-pill p-5 focusbg position-relative">
                                <ul className="focus-ul position-absolute top-0 start-50 translate-middle-x">
                                    <li className=""></li>
                                </ul>
                                <div className="fs-1 mt-5"><i className={"fa-solid " + focus.icon}></i></div>
                                <br />
                                <div className="fs-4 py-2 fw-bold">{idx+1}. {focus.action}</div>
                                <div className="small fw-bold">
                                    {focus.des}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Focus;