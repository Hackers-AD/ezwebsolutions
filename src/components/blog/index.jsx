import React from "react";
import Navbar from "../navbar";
import ScrollBar from '../scrollBar';
import Footer from '../footer';
import BlogSearch from "./blogSearch";
import BlogTags from './blogTags';
import Blogs from "./blogs";
import BlogView from "./blogView";
import CategorizedBlog from './categorizedBlog';
import SearchedBlogs from "./searchedBlogs";
import { useParams, useLocation, useSearchParams } from "react-router-dom";

const Blog = () => {
    const { blogid, blogcategory } = useParams();
    const location = useLocation();
    const search = location.pathname === '/blog/search';
    const [searchParams] = useSearchParams();

    return (
        <React.Fragment>
            <ScrollBar />
            <Navbar />
            <div className="container">
                <div className="row pt-3 pb-2 align-items-center">
                    <div className="col-lg-6">
                        <BlogSearch />
                    </div>
                    <div className="col-lg-6">
                        <BlogTags />
                    </div>
                </div>
            </div>
            {blogid ? <BlogView id={blogid} />: null}
            {blogcategory? <CategorizedBlog category={blogcategory} /> : null}
            {search ? <SearchedBlogs text={searchParams.get("query")} />: null}
            {!blogid && !blogcategory && <Blogs />}
            <Footer />
        </React.Fragment>
    );
}
 
export default Blog;