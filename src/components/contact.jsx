import React from "react";
import '../css/contact.css';

const Contact = () => {

    return (
        <div className="container py-5" id="contact" data-aos="fade-up">
            <div className="h1">Contact Details</div>
            <div className="row">
                <div className="col-md-6 py-2">
                    <div id="map" className="w-100 h-100">
                        <iframe title="location" className="w-100 h-100" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?hl=en&amp;q=%20Simara%20Sagar%20Home+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
                <div className="col-md-6 py-2">
                    <div className="">
                        <div className="text-center">
                            <div className="py-2 border-bottom">
                                <div className="h1 text-warning"><i className="fa-solid fa-envelope"></i></div>
                                <div>aneildhakal21@gmail.com</div>
                                <div>072bex451@pcampus.edu.com</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="py-2 border-bottom">
                                <div className="h1 text-warning"><i className="fa-solid fa-phone"></i></div>
                                <div>+977-9845713027</div>
                                <div>+977-980877820</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="py-2 border-bottom">
                                <div className="h1 text-warning"><i className="fa-solid fa-map-marker"></i></div>
                                <div>Jeetpursimara-04, Bara, Province No. 2, Nepal</div>
                                <div>Nayabazzar-16, Bagmati, Province No. 3, Nepal</div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}
 
export default Contact;