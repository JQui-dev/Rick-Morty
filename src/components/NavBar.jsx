import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import { AiOutlineSearch } from "react-icons/ai"
import { BiSearch, BiMenu } from "react-icons/bi"

import "./style/NavBar.scss";

function NavBar() {

  const [ show, setShow ] = useState(false)

  return (
    <header>
      <Link to="/" className='title'>RM</Link>
      <nav>
        {
          show ?

          <div className='showed' onClick={()=>{setShow(false)}}>
            <Link to="/">HOME</Link>
            <Link to="/characters">CHARACTERS</Link>
            <Link to="https://jqui-dev.netlify.app/contact" target='_BLANK'>CONTACT</Link>
            <Link to="https://rickandmortyapi.com/" target='_BLANK'>API</Link>

            <img src="/assets/img/main_xlq.png"/>
          </div>

          : 
          <div className="navButton">
            <Link to="/search">
              <AiOutlineSearch/>
            </Link>
            <BiMenu onClick={()=>{setShow(true)}}/>
          </div>
        }
      </nav>
    </header>
  )
}

export default NavBar