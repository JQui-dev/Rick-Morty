import React, { useEffect, useState } from 'react'
import { BiFirstPage, BiChevronLeft, BiChevronRight, BiLastPage } from "react-icons/bi"

import "./style/Pagination.scss"

function Pagination({data, setApi, api}) {

  const [ page, setPage ] = useState("1")

  // When a button is clicked
  const move = (here) => {
    if(here===null) {
      return alert("No characters here")
    } 
    window.scrollTo(0,0)
    setApi(here);
  }

  // Last and first buttons
  const handleMove = (where) => {
    let splited = api.split("?")
    let main = splited[0]
    let params = splited[1].split("&")

    for(let i=0; i<params.length; i++) {
      if (params[i].includes("page")) {
        params.splice(i, 1)
      }
    }

    params = params.join("&")
    
    let link = ""
    if (where === "first") {
      link = `${main}?${params}`
    } else if (where === "last") {
      link = `${main}?page=${data.info.pages}&${params}`
    }
    
    move(link)
  }



  useEffect(()=>{
    api && pageNumber()
  }, [api])

  const pageNumber = () => {
    let splited = api.split("?")
    let params = splited[1].split("&")
    
    for(let i=0; i<params.length; i++) {
      if (params[i].includes("page")) {
        return setPage(params[i].split("=")[1])
      }
      return setPage("1")
    }
  }

  return (
    <footer className='Pagination'>

        <button onClick={()=>handleMove("first")}>
            <BiFirstPage/>
        </button>

        <button className='btn' onClick={()=>{move(data.info.prev)}}>
            <BiChevronLeft/>
        </button>


        <h3>{page}</h3>


        <button onClick={()=>{move(data.info.next)}}>
            <BiChevronRight/>
        </button>

        <button onClick={()=>handleMove("last")}>
            <BiLastPage/>
        </button>

    </footer>
  )
}

export default Pagination