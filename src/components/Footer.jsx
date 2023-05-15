import "./style/Footer.scss"

import { RiInstagramLine, RiGithubFill, RiClipboardFill } from "react-icons/ri";

function Footer() {
  return (
    <footer>
        <p>
            This is a fan-made web app using 
            <a href="https://rickandmortyapi.com/">
            The Rick & Morty API
            </a> 
        </p>
        <div className="contact">
            <a href="https://github.com/JQui-dev" target="_blank">
                <RiGithubFill size={40}/>
            </a>
            <a href="https://www.instagram.com/jquiroz___/" target="_blank">
                <RiInstagramLine size={40}/>
            </a>
            <a href="https://jqui-dev.netlify.app/" target="_blank">
                <RiClipboardFill size={40}/>
            </a>
        </div>
    </footer>
  )
}

export default Footer