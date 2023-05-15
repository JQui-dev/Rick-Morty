import "./style/HomePage.scss"

import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="HomePage">
      
      <div className="phrase">
        <div className="info">
          <h2>“Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.” </h2>
          <h3>- Morty</h3>
        </div>
        <Link to="characters" className="see">See Characters!</Link>
      </div>
    </div>
  )
}

export default HomePage