import "./Alive.scss";

function Alive({status}) {
  return (
    <>
    {
      status==="Alive" ?
        <div className="Alive"></div>
    : status==="Dead" ?
        <div className="Dead"></div>
    :   <div className="Unknown"></div>
    }
    </>
  )
}

export default Alive