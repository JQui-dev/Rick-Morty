import React from 'react'

import "./style/SearchBtn.scss"

function SearchBtn({what, newProp, setStatusNEW, setGenderNEW}) {

    const statusChanger = (what, newProp) => {
        if(what === "status") {
            newProp === "any" 
            ? setStatusNEW("")
            : setStatusNEW(`status=${newProp}`)
        } 
        if (what === "gender") {
            newProp === "any" 
            ? setGenderNEW("")
            : setGenderNEW(`gender=${newProp}`)
        }
    }



  return (
    <button className={newProp==="any" ? "delete" : ""} onClick={()=>statusChanger(what, newProp)}>
        {newProp}
    </button>
  )
}

export default SearchBtn