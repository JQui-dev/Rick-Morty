// MODULES
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

// PAGES
import Specific from "./Specific";

// COMPONENTS
import Alive from "../components/sub/Alive";
import Pagination from "../components/Pagination";

// STYLE
import "./style/Characters.scss"

function Characters() {

  const [ api, setApi ] = useState("https://rickandmortyapi.com/api/character")
  const [ character, setCharacter ] = useState([])
  const [ page, setPage ] = useState([])

  useEffect(() => {
    fetchChara();
  }, [api])

  const fetchChara = async () => {
    const data = await fetch(api)
    const jsonData = await data.json()
    setCharacter(jsonData.results)
    setPage(jsonData.info)
  }

  return (
    <div className="Characters">
      <div className="cards">
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
      <Pagination setApi={setApi} page={page}/>
    </div>
  )
}

export default Characters