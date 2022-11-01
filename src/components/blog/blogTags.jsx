import { Link } from "react-router-dom";

const BlogTags = () => {
    const tags = ['Artificial Intelligence', 'Machine Learning', 'Web Development', 'Data Analytics', 'Python', 'Django', 'React',
                  'Automation', 'Intelligent Chatbots', 'Data Visualization']
    return (
        <div className="row justify-content-start">
            {tags.map((tag, idx) => {
                return(
                    <div className="col-auto px-2 py-1" key={idx}>
                        <Link to={"/blog/categories/"+tag}>
                            <div className="badge bg-light btn-rounded-sm p-2 text-dark tags">
                                {tag}
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}
 
export default BlogTags;