import { NavLink, Link } from "react-router-dom"

import "./style/NavBar.scss"
import "./style/Navigation.scss"
import { GrMenu, GrClose } from 'react-icons/gr';
import { useState } from "react";

function NavBar() {

  const [ show, setShow ] = useState(false)

  const showNav = () => {
    setShow(!show)
  }

  return (
    <div className='NavBar'>
      <div className="top">
        <NavLink to="/">
          <h1>R&M</h1>
        </NavLink>
        {
          show ?
          <GrClose size={40} onClick={showNav}/>
          :
          <GrMenu size={40} onClick={showNav}/>
        }
      </div>

      <div className={show ? "Navigation" : "hide"}>
        <NavLink to='/characters'>Characters</NavLink>
        <NavLink to='/places'>Places</NavLink>
        <NavLink to='/about'>About</NavLink>
      </div>
    </div>
  )
}

export default NavBar