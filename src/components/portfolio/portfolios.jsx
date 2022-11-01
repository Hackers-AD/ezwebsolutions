import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { app } from '../../firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Portfolios = () => {
    const [portfolios, setPortfolios] = useState([]);
    const db = getFirestore(app);

    const sortOddEven = (num) => {
        if(num%2 === 0){
            return "col-md-6 py-5"
        }else{
            return "col-md-6 order-md-1 last py-5"
        }
    }
    const allPortfolios = async() => {
        const docs = await getDocs(collection(db, 'portfolios'));
        let data = []
        docs.forEach(doc => {
            data.push(doc.data());
        });
        setPortfolios(data);
    }

    useEffect(() => {
        allPortfolios();
    }, []);

    return (
        <div className="container" data-aos="fade-up">
            <div className="row justify-content-center py-5">
                <div className="col-md-7">
                    <div className='d-flex align-items-center h5'>
                        <div className='pe-3'><Link to='/home' className='nav-link'>Home</Link></div>
                        <i className="fa-solid fa-circle-chevron-right"></i>
                        <div className='ps-3'><div>Portfolio</div></div>
                    </div>
                    <div className="h1">Transform your imagination into reality</div>
                    <div>
                        Artificial Intelligence and Machine Learning Based Apps and Business Solutions. We delivers the optimal solutions to your bussiness problems with our technology.
                        We believe in competitive working, some of these works of ours are listed here.
                    </div>
                </div>
            </div>
            {portfolios.map((p, p_idx) => {
                return(
                    <div className="row align-items-center" key={p_idx}>
                        <div className={sortOddEven(p_idx)}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className="h1">{p.name}</div>
                                <div className='h5' style={{'color': 'orange'}}>{p.date}</div>
                            </div>
                            <p>{p.des}</p>
                            <div>
                                <a href={p.url} target="_blank" rel='noreferrer'>
                                    <button className='btn btn-outline-warning btn-rounded-lg'>
                                        View Project <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 py-5">
                            <div id={"portfoliocarousel" + p_idx} className="carousel slide" data-bs-ride="true">
                                <div className="carousel-indicators">
                                    {p.image_urls.map((url, u_idx) => {
                                        return(
                                            <button key={u_idx} type="button" data-bs-target={"#portfoliocarousel" + p_idx} data-bs-slide-to={u_idx} className={u_idx === 0 ? "active": ""} aria-current= {u_idx === 0 ? 'true' : ''} aria-label={"Slide " + u_idx}></button>
                                        )
                                    })}
                                </div>
                                <div className="carousel-inner">
                                    {p.image_urls.map((url, idx) => {
                                        return(
                                            <div className={idx === 0 ? "carousel-item active" : "carousel-item"} key={idx}>
                                                <img src={url} className="d-block w-100" alt="" />
                                            </div>
                                        )
                                    })}                                    
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={"#portfoliocarousel" + p_idx} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={"#portfoliocarousel" + p_idx} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Portfolios;