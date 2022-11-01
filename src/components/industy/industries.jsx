import { Link } from "react-router-dom";

const Industries = () => {
    const industries = ['Healthcare', 'Education', 'News', 'Banking and Finance', 'Gaming and Entertainment','Cybersecurity',
                        'Social Media Marketing', 'Manufacturing', 'Ecommerce','Real Estate', 'Aviation', 'Agriculture']
    return (
        <div className="container my-3">
            <div className="pt-2 pb-5">
                A multi-disciplinary industry is a big challenge, however, Ezweb Solutions handle the works from wide range of industries.
            </div>
            <div className="row">
                {industries.map((industry,idx) => {
                    return(
                        <div className="col-md-4 py-2 text-center" key={idx}>
                            <Link to={"/industries/" + industry.toLowerCase().split(' ').join('-')} className="react-links">
                            <div className="border border-warning rounded p-3 servicelist-item">
                                <div className="d-flex justify-content-center">
                                    <div className="badge rounded-circle p-4 servicelist-badge">{idx < 9 ? '0'+(idx+1):idx+1}</div>
                                </div>
                                <div className="fw-bold py-1">{industry}</div>
                                <div className="py-2">
                                    <button className="btn btn-outline-warning btn-rounded-lg">
                                        View <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Industries;