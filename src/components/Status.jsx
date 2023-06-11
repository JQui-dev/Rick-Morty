import React from 'react'

import "./style/Status.scss"

function Status({cStatus}) {

  return (
    <div
    className={`Status
    ${
    cStatus==="Alive" ? "alive"
    : cStatus==="Dead" ? "dead"
    : "unknown"}
    `}
    />
  )
}

export default Status