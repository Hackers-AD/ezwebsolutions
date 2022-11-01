import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore,getDocs, collection } from 'firebase/firestore';
import { app } from '../../firebase';

const BlogFilter = () => {
    const tags = ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Data Analytics', 'Python', 'Django', 'React',
                  'Automation', 'Intelligent Chatbots', 'Data Visualization']
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
        <React.Fragment>
            <div className="">
                <div className="h3">Recent Blog</div>
                <ul className="p-0">
                    {blogs.map((blog, index) => {
                        return(
                            <Link to={"/blog/"+blog.id} className="links" key={index}>
                                <li className="py-2 blog-list border-bottom" key={index}>
                                    {blog.title}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
            <div className="py-3">
                <div className="h3">Archives</div>
                <ul className="p-0">
                    {['2020', '2021', '2022'].map((date, idx) => {
                        return(
                            <li className=" py-2 blog-list border-bottom" key={idx}>{date}</li>   
                        )
                    })}
                </ul>
            </div>
            <div className="py-3">
                <div className="h3">Categories</div>
                <ul className="p-0">
                    {tags.map((tag, idx) => {
                        return(
                            <Link to={"/blog/categories/"+tag} className="links" key={idx}>
                                <li className="py-2 blog-list border-bottom">
                                    {tag}
                                </li>
                            </Link>   
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    );
}
 
export default BlogFilter;