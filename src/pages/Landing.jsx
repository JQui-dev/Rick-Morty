import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { AiFillEye } from "react-icons/ai"

function Landing() {

  const [ imgUrl, setImgUrl ] = useState("")

  useEffect(()=>{
    randImg()
  }, [])

  const randImg = () => {
    // get a number less than 4
    let randNum = Math.floor(Math.random()*3)+1;
    setImgUrl(`public/assets/img/rm${randNum}.png`)
  }

  return (
    <main>
      <section>
        <h1>Wubba Lubba Dub Hub</h1>
        <h2>Grab your portal gun, put on your Meeseeks' smile, and get ready to dive headfirst into the Rick and Morty universe.</h2>
        
      <Link to='/characters'>
          <AiFillEye/>
          Characters
        </Link>
      </section>
      <img src={imgUrl} alt="Background rick and morty image"/>
    </main>
  )
}

export default Landing