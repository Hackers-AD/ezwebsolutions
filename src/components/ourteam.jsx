import React, { useState, useEffect, useContext } from "react";
import '../css/ourteam.css';
import { app } from '../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { themeContext } from './context/themeContext';

const OurTeam = () => {
    const [members, setMembers] = useState([]);
    const db = getFirestore(app);
    const { theme } = useContext(themeContext);
    const ourtheme = theme === 'light' ? 'dark': 'light';

    const allMembers = async() => {
        const docs = await getDocs(collection(db, 'ourteam'));
        let data = []
        docs.forEach(doc => {
            data.push(doc.data());
        })
        setMembers(data);
    }

    useEffect(() => {
        allMembers();
    }, [])
    
    return (
        <div className="container" id="ourteam" data-aos="fade-up">
            <div className="h1">Our Expert Team</div>
            <p>We believe working in a team accomplish the outstanding goals.</p>
            <div id="teamcarousel" className={"carousel carousel-"+ ourtheme + " py-2 slide"} data-bs-ride="carousel">
                <div className="carousel-inner">
                    {members.map((m, idx) => {
                        let carouselClass = "carousel-item";
                        if(idx === 0) carouselClass += " active";
                        return(
                            <div className={carouselClass} key={m.name}>
                                <div className="row justify-content-center">
                                    <div className="col-md-6 text-center">
                                        <div>
                                            <img src={m.img_url} alt="" className="w-50 p-2 bg-white shadow-lg  rounded-circle" />
                                            <div className="py-2">
                                                <div className="fs-5 fw-bold py-1">{m.name}</div>
                                                <div className="fw-bold">{m.designation}</div>
                                                <div className="">{m.email}</div>
                                                <p className="small fw-bold fst-italic pt-3">"{m.des}"</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#teamcarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#teamcarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
 
export default OurTeam;