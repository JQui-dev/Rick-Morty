import "./Intro.scss"
import logo from "./../assets/logo.png"

import { BsSearch } from 'react-icons/bs';

function Intro({ setApi, count, setCount }) {

    return (
        <div className="Intro">
            <img src={logo} alt="logo"/>

            <div className="search">
                <BsSearch color="#fff" size={30}/>
                <input type="text" placeholder="Character name" onChange={(e) => {
                    e.preventDefault();
                    console.log(count);
                    setCount(count = 1)
                    console.log(count);
                    setApi(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
                }}/>
            </div>
        </div>
    )
}

export default Intro