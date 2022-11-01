import BlogFilter from './blogFilter';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { getFirestore,getDocs, collection } from 'firebase/firestore';
import { app } from '../../firebase';

const CategorizedBlog = ({category}) => {
    const [blogs, setBlogs] = useState([]);
    const db = getFirestore(app);
    const categoryArray = category.toLowerCase().split(' ');

    const allBlogs = async() => {
        const docs = await getDocs(collection(db, 'blogs'));
        let data = []
        docs.forEach(doc => {
            let cats = doc.data().category;
            const matchedcats = cats.filter(c => {
                for (let i = 0; i < categoryArray.length; i++) {
                    const element = categoryArray[i];
                    if(c.includes(element)){
                        return c;
                    }
                }
            });
            if(matchedcats.length > 0){
                data.push(doc.data());
            }
        })
        setBlogs(data);
    }

    useEffect(() => {
        allBlogs();
    }, [category]);

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 py-2">
                    <div className="h3">Blogs for Category: <span className='text-warning'>{category}</span></div>
                    {blogs.length === 0 ?
                        <div className="">
                            <span className="text-warning"><span className="fs-3 fw-bold">O</span>pps!! </span> 
                            no any blogs found relating to <span className='text-warning fst-italic'> {category}</span>. Try another.
                        </div>
                    : null}
                    {blogs.map((blog,b_idx) => {
                        return(
                            <div key={b_idx} className="py-3">
                                <div className="h3 fw-bold">{b_idx+1}. {blog.title}</div>
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
                <div className="col-md-6 py-2">
                    <BlogFilter />
                </div>
            </div>
        </div>
    );
}
 
export default CategorizedBlog;