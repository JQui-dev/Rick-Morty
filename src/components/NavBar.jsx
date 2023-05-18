import { NavLink } from "react-router-dom"

import { GrMenu } from 'react-icons/gr';

import "./style/NavBar.scss"

function NavBar() {
  return (
    <div className='NavBar'>
      <NavLink to="/">
        <h1>RICK & MORTY</h1>
      </NavLink>
      <nav>
        <NavLink className={({isActive}) => isActive ? "on" : ""} to='/characters'>Characters</NavLink>
        <NavLink className={({isActive}) => isActive ? "on" : ""} to='/places'>Places</NavLink>
        <NavLink className={({isActive}) => isActive ? "on" : ""} to='/about'>About</NavLink>
      </nav>
    </div>
  )
}

export default NavBar