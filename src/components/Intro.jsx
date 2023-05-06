import "./Intro.scss"
import logo from "./../assets/logo.png"
import { useState } from "react";

import { BsSearch } from 'react-icons/bs';

function Intro({ setApi, count, setCount }) {

    let [ fsearch, setFSearch ] = useState(false)

    function handleSearch() {
        setFSearch(fsearch = !fsearch)
    }

    return (
        <div className={fsearch===true ? "Intro inv" : "Intro"}>
            <img className={fsearch===true ? "hide" : "show"} src={logo} alt="logo"/>

            <div className="search">
                <BsSearch size={30} onClick={handleSearch}/>
                <input className={fsearch===true ? "sinput show" : "hide"} type="text" placeholder="Character name" onChange={(e) => {
                    setCount(count = 1);
                    setApi(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
                }}/>
            </div>
        </div>
    )
}

export default Intro