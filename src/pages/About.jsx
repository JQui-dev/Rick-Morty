import { Link } from "react-router-dom";

import { MdContactSupport } from "react-icons/md"
import { RiClipboardFill } from "react-icons/ri"

import "./style/About.scss";

function About() {
  return (
    <div className='About'>
      <div className="left">
        <h1>Hey, <span>I'm Joseph</span></h1>
        <h2>Front-End Developer</h2>
      </div>
      <div className="right">
        <h3>Wanna do some cool projects with me?</h3>
        <div className="bottom">
          <Link><MdContactSupport/>CONTACT ME!</Link>
          &
          <Link target="_BLANK" to="https://jqui-dev.netlify.app/"><RiClipboardFill/>Portfolio</Link>
        </div>
      </div>
    </div>
  )
}

export default About