import "./style/HomePage.scss"

import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="HomePage">
      <div className="left">
        <div className="top">
          <h2>Welcome!</h2>
          <p>This is the Rick & Morty API by Joseph</p>
        </div>
        <div className="bottom">
          <h3>Start watching:</h3>
          <Link to="Characters">Characters</Link>
        </div>
      </div>
      <div className="right">
        <img src="/rm.png" alt="" />
      </div>
    </div>
  )
}

export default HomePage