import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFirestore,getDocs, collection } from 'firebase/firestore';
import { app } from '../../firebase';

const SuggestedBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const db = getFirestore(app);
    
    const allBlogs = async() => {
        const docs = await getDocs(collection(db, 'blogs'));
        let data = []
        docs.forEach(doc => {
            data.push(doc.data());
        })
        setBlogs(data);
    }
    useEffect(() => {
        allBlogs();
    }, [])
    return (
        <div>
            <div className="h1">Suggested for you</div>
            <div className="row">
                {blogs.map((blog,b_idx) => {
                    return(
                        <div className="col-md-6 py-3" key={b_idx}>
                            <div className="blog-container">
                                <div>
                                    <img src={blog.img_url} alt="" className="w-100 blog-img" />
                                </div>
                                <div className="blog-text">
                                    <Link to={"/blog/"+ blog.id} className="links">
                                        <div className="h3 blog-title">{blog.title}</div>
                                    </Link>
                                    <div className="fw-bold fst-italic pe-2">
                                        <span className="fs-5">C</span>reator:  
                                        <span> {blog.author}</span>
                                    </div>
                                    <div className="text-truncate">{blog.des}</div>
                                    <br />
                                    <div>
                                        <Link to={"/blog/"+ blog.id} className="links"> 
                                            <button className="btn btn-outline-warning btn-rounded-lg">
                                                View Blog <i className="fa-solid fa-arrow-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default SuggestedBlogs;