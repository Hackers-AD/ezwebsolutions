import { useState, useEffect } from "react";
import { getFirestore,doc, getDoc } from 'firebase/firestore';
import { app } from '../../firebase';
import BlogFilter from './blogFilter';

const BlogView = ({id}) => {
    const [blog, setBlog] = useState([]);
    const db = getFirestore(app);

    const fetchBlog = async() => {
        const docSnap = await getDoc(doc(db,'blogs',id));
        if(docSnap.exists()){
            setBlog(docSnap.data())
        }else{
            console.log("No such document!");
        }
    }

    useEffect(() => {
        fetchBlog();
    }, [id])
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    {blog.length !== 0
                    ?
                    <div>
                        <div className="py-1 fw-bold">
                            {blog.date.toDate().toLocaleDateString('en-us', 
                                { weekday:"long", year:"numeric", month:"short", day:"numeric"})}   
                        </div>
                        <div className="fs-3 fw-bold py-1">{blog.title}</div>
                        <div className="">{blog.des}</div>
                        <div>
                            <img src={blog.img_url} alt="" className="w-100 py-2" />
                        </div>
                    </div>
                    : 
                        <div className="fw-bold text-danger">No such document!</div>
                    }
                </div>
                <div className="col-md-6">
                    <BlogFilter blogs={[]} />
                </div>
            </div>
        </div>
    );
}
 
export default BlogView;