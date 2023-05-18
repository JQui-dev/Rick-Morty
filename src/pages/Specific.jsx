// MODULES
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// COMPONENTS
import Alive from "../components/sub/Alive";

// STYLE
import "./style/Specific.scss"

function Specific() {

    let {id} = useParams()
    let [ info, setInfo ] = useState({});
    let [ created, setCreated ] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    // only convert the date if the async of fetchData has finished
    useEffect(() => {
        dateFormat();
      }, [info]);
    
    const fetchData = async () => {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const jsonData = await data.json()
        setInfo(jsonData)
    }


    const dateFormat = () => {
        let date = new Date(info.created)
        setCreated(created = date.toLocaleString())
    }

  return (
    <div className="Specific">
        <img src={info.image} alt={`${info.name} image`} />
        <div className="info">

            <h1>{info.name}!</h1>
            <div className="status">
                <h2>Status: </h2>
                <Alive status={info.status}/>
                <h2>{info.status}</h2>
            </div>
            <h2>I'm {info.gender} & {info.species}</h2>
            <h2>Created in {created=="Invalid Date" ? "... Lemme think" : created}</h2>
        </div>
    </div>
    )
}

export default Specific