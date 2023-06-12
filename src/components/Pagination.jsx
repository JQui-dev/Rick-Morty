import React, { useEffect, useState } from 'react'
import { BiFirstPage, BiChevronLeft, BiHomeAlt2, BiChevronRight, BiLastPage } from "react-icons/bi"

import "./style/Pagination.scss"

function Pagination({data, setApi, api}) {

  const [ page, setPage ] = useState("1")

  // Number of the page
  useEffect(()=>{
    const calcPage = api.slice(47, api.length)
    if (calcPage === "") {
      return setPage("1")
    }
    setPage(calcPage)
  }, [data])

  // When a button is clicked
  const move = (here) => {
    if(here===null) {
      return alert("No characters here")
    } 
    window.scrollTo(0,0)
    setApi(here);
  }

  return (
    <footer className='Pagination'>

        <button onClick={()=>{move("https://rickandmortyapi.com/api/character")}}>
            <BiFirstPage/>
        </button>

        <button className='btn' onClick={()=>{move(data.info.prev)}}>
            <BiChevronLeft/>
        </button>


        <h3>{page}</h3>


        <button onClick={()=>{move(data.info.next)}}>
            <BiChevronRight/>
        </button>

        <button onClick={()=>{move(`https://rickandmortyapi.com/api/character?page=${data.info.pages}`)}}>
            <BiLastPage/>
        </button>

    </footer>
  )
}

export default Pagination