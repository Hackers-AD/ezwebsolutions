const Frontend = () => {
    const frontends = [
        {name: 'React', img_url: '/img/technologies/react.png'},
        {name: 'HTML', img_url: '/img/technologies/html.png'},
        {name: 'CSS', img_url: '/img/technologies/css.png'},
        {name: 'JavaScript', img_url: '/img/technologies/js.png'},
        {name: 'React Native', img_url: '/img/technologies/react.png'},
    ]
    return (
        <div className="container my-5">
            <div className="h3">Frontend Technologies</div>
            <div>
                These technologies helps in the development of the graphical user interface of a website,through the use of 
                HTML, CSS, and JavaScript, so that users can view and interact with that website
            </div>
            <div className="row py-2">
                {frontends.map((f, idx) => {
                    return(
                        <div className="col-6 col-md-4 col-lg-2 text-center py-2" key={idx}>
                            <div className="border p-2 rounded shadow-md">
                                <img src={f.img_url} alt={f.name} className="w-50  rounded-circle" />
                                <div className="py-2 fs-5 fw-bold">{f.name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default Frontend;