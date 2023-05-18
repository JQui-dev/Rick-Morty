import { useState } from "react";
import "./style/Pagination.scss";

import { GrFormPrevious, GrFormNext } from "react-icons/gr"

function Pagination({setApi, page}) {

    let [ to, goTo ] = useState("")
    console.log(page)

    const scrollTop = () => {
        window.scrollTo({top: 0})
    }

    const handlePrev = () => {
        setApi(page.prev)
        scrollTop();
    }
    
    const handleNext = () => {
        setApi(page.next)
        scrollTop();
    }

  return (
    <div className="Pagination">
        {
            page.prev!==null ? <button className="item" onClick={handlePrev}><GrFormPrevious/></button> : ""
        }
            <form action="submit" onSubmit={(e) => {
                e.preventDefault()
                if (to > 0 && to <= page.pages) {
                    setApi(`https://rickandmortyapi.com/api/character?page=${to}`)
                    scrollTop();
                    goTo("")
                } else {
                    alert(`There is only ${page.pages} pages`)
                }
            }}>
                <input placeholder={"Search by page"} className="item" type="number" value={to} onChange={(e) => {
                    goTo(e.target.value)
                }}/>
            </form>
        {
            page.next!==null ? <button className="item" onClick={handleNext}><GrFormNext/></button> : ""
        }
    </div>
  )
}

export default Pagination