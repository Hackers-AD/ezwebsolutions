import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getFirestore,getDocs, collection } from 'firebase/firestore';
import { app } from '../../firebase';

const SearchedBlogs = ({text}) => {
    const [blogs, setBlogs] = useState([]);
    const db = getFirestore(app);
    const wordlist = text.toLowerCase().split(" ")
    
    const allBlogs = async() => {
        const docs = await getDocs(collection(db, 'blogs'));
        let data = []
        docs.forEach(doc => {
            let title = doc.data().title.toLowerCase();
            for (let i = 0; i < wordlist.length; i++) {
                const word = wordlist[i];  
                if(title.includes(word)){
                    data.push(doc.data());
                    break;
                }
            }
        })
        setBlogs(data);
    }
    useEffect(() => {
        allBlogs();
    }, [text]);
    
    return (
        <div className="container my-5">
            <div className="">
                <span className="h1">Search Results for: </span>
                <span className="h1 fw-bold text-warning"> "{text}"</span>
            </div>
            {blogs.length === 0 ?
                <div className="">
                    <span className="text-warning"><span className="fs-3 fw-bold">O</span>pps!! </span> 
                    no any blogs found! try changing search keywords.
                </div>
            : null}
            <div className="row">                    
                {blogs.map((blog) => {
                    return(
                        <div key={blog.id} className="col-md-6 py-3">
                            <div className="h3 fw-bold">{blog.title}</div>
                            <div className="d-flex justify-content-between align-items-center py-1 text-warning">
                                <div className="fw-bold fst-italic pe-2">
                                    <span className="fs-5">C</span>reator:  
                                    <span> {blog.author}</span>
                                </div>
                                <div className="ps-2 fw-bold">
                                    {blog.date.toDate().toLocaleDateString('en-us', 
                                        { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
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
        </div>
    );
}
 
export default SearchedBlogs;