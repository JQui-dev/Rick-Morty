import "./Intro.scss"

import { BsSearch } from 'react-icons/bs';

function Intro() {

    return (
        <div className="Intro">
            <div className="search">
                <BsSearch color="#fff" size={40}/>
            </div>
            <nav>
                <a href="#">Characters</a>
                <a href="#">Places</a>
                <a href="#">Episodes</a>
            </nav>
        </div>
    )
}

export default Intro