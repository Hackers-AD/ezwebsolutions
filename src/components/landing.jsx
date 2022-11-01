import React, { useRef,useState, useEffect } from "react";
import '../css/landing.css';
import ScrollBar from './scrollBar';
import { Link } from "react-router-dom";

function LandingBanner () {
    const videoRef = useRef(null);
    const randomVideo = ["video2.mp4", 'video1.mp4', 'video3-cut.mp4'];
    const randomState = Math.floor(Math.random() * (2 - 0 + 1)) + 0

    const data = [
        {
            heading: "Transform your imagination into reality", 
            tag: "Artificial Intelligence and Machine Learning Based Apps and Business Solutions."
        },
        {
            heading: "Machine Learning Algorithms", 
            tag: "We build the bussiness solutions using machine learning algorithms."
        },
        {
            heading: "Data Analysis and Visualization", 
            tag: "Applying the appropriate mathematical model, we analyze the bussiness data and visualize them with graphs."
        },
    ]

    const [text,setText] = useState(() => ({
        heading: data[randomState].heading,
        tag: data[randomState].tag,
        color: "white",
    }));

    useEffect(() => {
        videoRef.current.play();
    },[]);
    
    return (
        <div className="video-container w-100">
            <ScrollBar />
            <div>
                <video src={"videos/"+randomVideo[randomState]} className="landing-video" ref={videoRef} loop muted="muted"></video>
            </div>
            <div className={"text-content text-"+text.color}>
                <div data-aos="zoom-in">
                    <div className="h1">{text.heading}</div>
                    <div className="h5">{text.tag}</div>
                </div>
                <br />
                <Link to="#about" className="react-links">
                    <button className="btn btn-lg btn-outline-warning btn-rounded-lg">Explore more</button>
                </Link>
            </div>
        </div>
    );
}
 
export default LandingBanner;