const Database = () => {
    const databases = [
        {name: 'MySql', img_url: '/img/technologies/mysql.png'},
        {name: 'PostgreSQL', img_url: '/img/technologies/postgresql.png'},
    ]
    return (
        <div className="container my-5">
            <div className="h3">Databases</div>
            <div>Databases are the technology that helps to store data systematically through CRUD operations.</div>
            <div className="row py-2">
                {databases.map((f, idx) => {
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
 
export default Database;