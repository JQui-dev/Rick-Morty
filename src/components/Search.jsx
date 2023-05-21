import { useState } from "react";
import "./style/Search.scss";

import { GrFormSearch } from "react-icons/gr"

function Search({setApi}) {

    return (
        <div className="Search">
        <input type="text" placeholder="Search" onChange={(e) => {
            let name = e.target.value;
            console.log(name)
            name !== "" ?
            setApi(`https://rickandmortyapi.com/api/character/?name=${name}`)
            :
            setApi("https://rickandmortyapi.com/api/character")
        }}/>
        <button>
            <GrFormSearch size={40}/>
        </button>
    </div>
  )
}

export default Search