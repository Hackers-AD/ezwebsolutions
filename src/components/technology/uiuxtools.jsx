const UiUxTools = () => {
    const services = [
        {name: 'Photoshop', img_url: '/img/technologies/photoshop.png'},
    ]
    return (
        <div className="container my-5">
            <div className="h3">UI/UX Design Tools</div>
            <div>These tools helps in designing the better and advanced UI/UX.</div>
            <div className="row py-2">
                {services.map((f, idx) => {
                    return(
                        <div className="col-6 col-md-4 col-lg-2 text-center py-2" key={idx}>
                            <div className="border p-2 rounded shadow-md">
                                <img src={f.img_url} alt={f.name} className="w-50 rounded-circle" />
                                <div className="py-2 fs-5 fw-bold">{f.name}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
 
export default UiUxTools;