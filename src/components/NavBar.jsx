import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import { BiSearch, BiMenu } from "react-icons/bi"

import "./style/NavBar.scss";

function NavBar() {

  const [ show, setShow ] = useState(false)

  return (
    <header>
      <h1>RM</h1>
      <nav>
        {
          show 
          ?

          <div className='showed' onClick={()=>{setShow(false)}}>
            <Link to="/">HOME</Link>
            <Link to="/characters">CHARACTERS</Link>
            <Link to="https://jqui-dev.netlify.app/" target='_BLANK'>CONTACT</Link>
            <Link to="https://rickandmortyapi.com/" target='_BLANK'>API</Link>

            <img src="/assets/img/main_xlq.png"/>
          </div>

          : <BiMenu onClick={()=>{setShow(true)}}/>
        }
      </nav>
    </header>
  )
}

export default NavBar