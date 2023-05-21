// MODULES
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

// PAGES

// COMPONENTS
import Search from "../components/Search";
import Alive from "../components/sub/Alive";
import Pagination from "../components/Pagination";

// STYLE
import "./style/Characters.scss"

function Characters() {

  const [ api, setApi ] = useState("https://rickandmortyapi.com/api/character")
  const [ found, setFound ] = useState(true)

  const [ character, setCharacter ] = useState([])
  const [ page, setPage ] = useState([])

  useEffect(() => {
    fetchChara();
  }, [api])

  const fetchChara = async () => {
    try {
      const data = await fetch(api)
      if (!data.ok) {
        return setFound(false)
      }
      setFound(true)
      const jsonData = await data.json()
      setCharacter(jsonData.results)
      setPage(jsonData.info)
    } catch {
      console.error(error)
    }
  }

  return (
    <div className="Characters">
      <Search setApi={setApi}/>
      {
        found ?
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
        : <div className="error">Character 404</div>
      }
      {
        found ?
          <Pagination setApi={setApi} page={page}/>
        : ""
      }
    </div>
  )
}

export default Characters