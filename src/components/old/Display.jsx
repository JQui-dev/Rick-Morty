import { useState } from "react"
import "./Display.scss"

import { GrLocation } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { MdKeyboardBackspace } from "react-icons/md";

function Display({data, error, nav, setNav}) {

    let [ spe, setSpe ] = useState(false)
    let [ name, setName ] = useState("")
    let [ status, setStatus ] = useState("")
    let [ specie, setSpecie ] = useState("")
    let [ location, setLocation ] = useState([])
    let [ created, setCreated ] = useState("")
    let [ img, setImg ] = useState("")

    return (
        <div className="Display">
            {
                error!=="" ? <h1 className="error">{error}</h1> :
                spe===true ? 
                
                <div className="specific">
                        <div className="back">
                            <MdKeyboardBackspace onClick={() => {
                                setSpe(spe = false)
                                setNav(nav = true)
                            }} size={60}/>

                            Character Info
                        </div>

                        <div className="sChara">
                            <img src={img} alt={`${name} image`} />
                            <div className="info">
                                <h2 className="name">{name}</h2>
                                <div className="sub">
                                    <div className={status === "Alive" ? "alive" : status === "Dead" ? "dead" : "unkw"}></div>
                                    <h2 className="location">{specie}</h2>
                                </div>
                                <h2 className="location"><GrLocation/> {location.name}</h2>
                                <h2 className="created"><BsCalendarDate/> {created}</h2>
                            </div>
                        </div>


                </div>

                : // Show every character in the page
                data.map(res => (
                    <div onClick={()=>{
                        setNav(nav=false);
                        // Pass info to the specific character page
                        setSpe(spe = true)
                        setName(name = res.name)
                        setStatus(status = res.status)
                        setSpecie(specie = res.species)
                        setLocation(location = res.location)
                        setImg(img = res.image)

                        let date = new Date(res.created)
                        setCreated(created = date.toLocaleString())
                    }} className="chara" key={res.id}>
                        <img src={res.image} alt={`${res.name} image`} />
                        <div className="info">
                            <div className="sub">
                                <h2 className="name">{res.name}</h2>
                                <h2 className="location">{res.location.name}</h2>
                            </div>
                            <div className={res.status === "Alive" ? "alive" : res.status === "Dead" ? "dead" : "unkw"}></div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Display