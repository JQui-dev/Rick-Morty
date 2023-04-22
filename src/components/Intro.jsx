import "./Intro.scss"

import { BsSearch } from 'react-icons/bs';

function Intro({ setApi }) {

    return (
        <div className="Intro">
            <img src="./src/assets/logo.png" alt="logo"/>
            
            <div className="search">
                <BsSearch color="#fff" size={30}/>
                <input type="text" placeholder="Character name" onChange={(e) => {
                    setApi(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
                }}/>
            </div>
        </div>
    )
}

export default Intro