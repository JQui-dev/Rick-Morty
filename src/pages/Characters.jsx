// MODULES
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

// PAGES
import Specific from "./Specific";

// COMPONENTS
import Alive from "../components/sub/Alive";

// STYLE
import "./style/Characters.scss"

function Characters() {

  const [ character, setCharacter ] = useState([])

  useEffect(() => {
    fetchChara();
  }, [])

  const fetchChara = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    const jsonData = await data.json()
    setCharacter(jsonData.results)
    console.log(jsonData)
  }

  return (
    <div className="Characters">
      {
        character.map(({name, id, image, status}, key) => (
          <Link to={`${id}`} className="card" key={key}>
            <img src={image} alt={`${name} image`} />
            <div className="info">
              <h2>{name}</h2>
              <Alive className="status" status={status}/>
            </div>
          </Link>
        )) 
      }
    </div>
  )
}

export default Characters