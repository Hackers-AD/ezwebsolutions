const WebServices = () => {
    const services = [
        {name: 'Firebase', img_url: '/img/technologies/firebase.png'},
        {name: 'AI', img_url: '/img/technologies/ai.jpg'},
        {name: 'TensorFlow', img_url: '/img/technologies/tensorflow.png'},
        {name: 'Scikit-Learn', img_url: '/img/technologies/sci-kit-learn.png'},
    ]
    return (
        <div className="container my-5">
            <div className="h3">Web Services</div>
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
 
export default WebServices;