import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const BlogSearch = () => {
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        if(/^\s/.test(e.target.value)){
            setSearchText('')
        }else{
            setSearchText(e.target.value)
        }
    }
    const handleSearch = async(e) => {
        e.preventDefault();
        if(searchText.length > 0){
            navigate("/blog/search?query="+searchText);
        }
    }
    return (
        <div className="">
            <form onSubmit={handleSearch} id="searchform">
                <div className="d-flex align-items-center">
                    <div className="">
                        <button className="btn btn-light border rounded-0 p-3">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <input type="text" name="query" className="form-control py-3" placeholder="Search blogs" style={{'borderTopLeftRadius': 0, 'borderBottomLeftRadius': 0}} 
                        value={searchText} onChange={handleChange} />
                </div>
            </form>
        </div>
    );
}
 
export default BlogSearch;