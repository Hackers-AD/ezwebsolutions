import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFirestore,getDocs, collection } from 'firebase/firestore';
import { app } from '../../firebase';

const PopularBlogs = () => {
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
    }, []);
    return (
        <div className="">
            <div className="h1">Popular Blogs</div>
            {blogs.map((blog,b_idx) => {
                return(
                    <div key={b_idx} className="py-3">
                        <div className="h3 fw-bold">{blog.title}</div>
                        <div className="d-flex justify-content-between align-items-center py-1 text-warning">
                            <div className="fw-bold fst-italic pe-2">
                                <span className="fs-5">C</span>reator:  
                                <span> {blog.author}</span>
                            </div>
                            <div className="ps-2 fw-bold">
                                {blog.date.toDate().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
                            </div>
                        </div>
                        <div className="">{blog.des}</div><br />
                        <div><img src={blog.img_url} alt="blog_image" className="w-100" /></div>
                        <div className="pt-3">
                            <Link to={"/blog/"+ blog.id} className="links"> 
                                <button className="btn btn-outline-warning btn-rounded-lg">
                                    View Blog <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </Link>
                        </div>
                    </div>  
                )
            })}
        </div>
    );
}
 
export default PopularBlogs;