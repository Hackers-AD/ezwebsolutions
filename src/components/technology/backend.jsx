const Backend = () => {
    const backends = [
        {name: 'Django', img_url: '/img/technologies/django.png'},
        {name: 'Laravel', img_url: '/img/technologies/laravel.png'},
        {name: 'NodeJs', img_url: '/img/technologies/node.png'},
    ]
    return (
        <div className="container my-5">
            <div className="h3">Backend Technologies</div>
            <div>Technologies that focuses on everything you can't see on a website like saving data, interacting with database,
                  etc.</div>
            <div className="row py-2">
                {backends.map((f, idx) => {
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
 
export default Backend;