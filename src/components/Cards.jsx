import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai"
import { Link } from "react-router-dom";
import Status from "./Status";

import "./style/Cards.scss"

function Cards({chara}) {
  return (
    <section className="Cards">
      {chara.map((res, key) => (
        // CARD
        <div className="card" key={key}>
          <img src={res.image} alt={`${res.name} image`} />
          <div className="info">
            <h3>{res.name}</h3>
            <Link to={`/ch/${res.id}`}>
                <AiOutlineInfoCircle/>
            </Link>
            <Status cStatus={res.status} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Cards;
