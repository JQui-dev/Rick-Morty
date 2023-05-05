import "./Display.scss"

function Display({data, error}) {
    return (
        <div className="Display">
            {
                error!="" ? <h1 className="error">{error}</h1> :
                data.map(res => (
                    <a href={res.url} className="chara" key={res.id}>
                        <img src={res.image} alt={`${res.name} image`} />

                        <div className="info">
                            <div className="sub">
                                <h2 className="name">{res.name}</h2>
                                <h2 className="location">{res.location.name}</h2>
                            </div>
                            <div className={res.status === "Alive" ? "alive" : res.status === "Dead" ? "dead" : "unkw"}></div>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default Display