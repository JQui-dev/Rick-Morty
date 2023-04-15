import "./Display.scss"

function Display({data}) {
    return (
        <div className="Display">
            {
                data.map(res => (
                    <div className="contain" key={res.id}>
                        <img src={res.image} alt="" />

                        <div className="info">
                            <div className={res.status === "Alive" ? "alive" : "dead"}></div>
                            <div className="sub">
                                <h2 className="name">{res.name}</h2>
                                <h2 className="location">{res.location.name}</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Display