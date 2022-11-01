import React from "react";
import './blogs.css';
import BlogFilter from "./blogFilter";
import PopularBlogs from "./popularBlog";
import SuggestedBlogs from "./suggestedBlogs";

const Blogs = () => {
     
    return (
        <div className="container" data-aos="fade-up">

            <div id="blog-suggested" className="pb-3 pt-1">
                <SuggestedBlogs />
            </div>

            <div id="blog-latest" className="py-5">
                <div className="row">
                    <div className="col-md-6">
                        <PopularBlogs />
                    </div>
                    <div className="col-md-6 ps-md-5">
                        <BlogFilter />  
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Blogs;