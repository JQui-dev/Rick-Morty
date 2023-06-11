import React from 'react'
import { AiFillCaretLeft, AiFillHome, AiFillCaretRight } from "react-icons/ai"

import "./style/Pagination.scss"

function Pagination({data, setApi}) {
  return (
    <footer className='Pagination'>
        <button className='btn' onClick={()=>{setApi(data.info.prev)}}>
            <AiFillCaretLeft/>
        </button>
        <button className='btn' onClick={()=>{setApi("https://rickandmortyapi.com/api/character")}}>
            <AiFillHome/>
        </button>
        <button className='btn' onClick={()=>{setApi(data.info.next)}}>
            <AiFillCaretRight/>
        </button>
    </footer>
  )
}

export default Pagination