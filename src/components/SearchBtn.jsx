import React from 'react'

function SearchBtn({what, newProp, setStatusNEW, setGenderNEW}) {

    const statusChanger = (what, newProp) => {
        if(what === "status") {
            return setStatusNEW(`status=${newProp}`)
        } 
        if (what === "gender") {
            return setGenderNEW(`gender=${newProp}`)
        }
    }

  return (
    <button onClick={()=>{statusChanger(what, newProp)}}>
        {newProp}
    </button>
  )
}

export default SearchBtn