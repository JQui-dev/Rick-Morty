import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { AiFillEye } from "react-icons/ai"
import "./style/Landing.scss"

function Landing() {

  const [ imgUrl, setImgUrl ] = useState("")

  useEffect(()=>{
    randImg()
  }, [])

  const randImg = () => {
    // get a number less than 3
    let randNum = Math.floor(Math.random()*2)+1;
    setImgUrl(`public/assets/img/rm${randNum}.png`)
  }

  return (
    <main>
      <section>
        <div className="info">
          <h1>Wubba Lubba Dub 
            <span>
            Hub
            </span>
          </h1>
          <p>Grab your portal gun, put on your Meeseeks' smile, and get ready to dive headfirst into the Rick and Morty universe.</p>
        </div>
        
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