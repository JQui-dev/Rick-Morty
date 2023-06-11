import React from 'react'

import "./style/ChInfo.scss";

function ChInfo({title, info}) {
  return (
    <div className='ChInfo'>
        <h2>{title}</h2>
        <h3>{info}</h3>
    </div>
  )
}

export default ChInfo