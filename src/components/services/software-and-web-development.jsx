const SoftwareWebDevelopment = ({name}) => {
    const technologies = ['python', 'tensorflow', 'Scikit-learn', 'django', 'react', 'react-native']
    const workimages = ['/img/ai.jpg', '/img/aboutbg.jpg']

    return (
        <div className="container py-5">
            <div className="">
                Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. Software development involves writing and maintaining the source code, but in a broader sense, it includes all processes from the conception of the desired software through to the final manifestation of the software, typically in a planned and structured process.
                <br /><br />
                Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
                <br /> <br />
                <span className="text-warning fw-bold"><i className="fa fa-info-circle"></i> We develops full-fledge software application as well as websites for your bussiness for solving small to complex problems.</span>
            </div>
            <div className="py-3">
                <div className="h1">How software and websites helps in bussiness growth</div>
                <ul className="navbar-nav ps-3">
                    <li className="nav-item py-2 h5">
                        <i className="fa-solid fa-angles-right"></i>
                        <span> Manage your relationships with customers.</span>
                    </li>
                    <li className="nav-item py-2 h5">
                        <i className="fa-solid fa-angles-right"></i>
                        <span> Task simplification for employees.</span>
                    </li>
                    <li className="nav-item py-2 h5">
                        <i className="fa-solid fa-angles-right"></i>
                        <span> Helps in monitoring of projects in company.</span>
                    </li>
                </ul>
            </div>
            <div className="py-3">
                <div className="h1">Technologies Used</div>
                <div className="row">
                {technologies.map((t, idx) => {
                    return(
                        <div className="col-auto py-2" key={idx}>
                            <div className="badge bg-light p-3 btn-rounded-md text-dark">{t}</div>
                        </div>
                    )
                })} 
                </div>
            </div>
            <div className="py-3">
                <div className="h1">Recent works on {name.split('-').join(' ')}</div>
                <div className="row py-2">
                    {workimages.map((img, idx) => {
                        return(
                            <div className="col-md-4 workimg-container py-2" key={idx}>
                                <img src={img} alt="" className="w-100 h-100 workimg"/>
                                <div className="workimg-btn">
                                    <button className="btn btn-outline-warning btn-rounded-lg">
                                        View Work <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default SoftwareWebDevelopment;