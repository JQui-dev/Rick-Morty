import React, { useState, useEffect } from 'react'

import "./style/Search.scss"

import Cards from '../components/Cards'

function Search() {

    const [ lastS, setLastS ] = useState(null)
    const [ lastG, setLastG ] = useState(null)

    const [ nameNEW, setNameNEW ] = useState("")
    const [ statusNEW, setStatusNEW ] = useState("")
    const [ genderNEW, setGenderNEW ] = useState("")
    const [ linkFIN, setLinkFIN ] = useState("")
    const [ data, setData ] = useState([])
    const [ chFIL, setChFIL ] = useState([])

    useEffect(()=>{
        organizeLink()
        console.log(nameNEW, statusNEW, genderNEW)
    }, [ nameNEW, statusNEW, genderNEW ])

    const organizeLink = () => {
        const oLink = "https://rickandmortyapi.com/api/character?"
        const filter = [ nameNEW && nameNEW, statusNEW, genderNEW ]
        setLinkFIN(`${oLink}${filter.join("&")}`)
    }



    useEffect(() => {
        fetchIt();
        console.log(linkFIN)
      }, [linkFIN]);
    
      const fetchIt = async () => {
        try {
          const fetchData = await fetch(linkFIN);
          if(fetchData.ok) {
            const jsonData = await fetchData.json();
            setData(jsonData.info);
            setChFIL(jsonData.results);
            console.log(jsonData);
          } else {
            console.log("Error fetching")
          }
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      };


      const statusChanger = (n, sta) => {
        SetLast(n)
        setStatusNEW(`status=${sta}`)
      }

  return (
    <div className="Search">
        <section className="filters">

        <input className='name' placeholder='Name' type="text" onChange={(e)=>{
            if (e.target.value.length > 2) {
                return setNameNEW(`name=${e.target.value}`)
            }
            return setNameNEW("")
        }}/>

        <div className='status'>
            <h4>Status:</h4>

            <div className="buttons">
                <button 
                className={lastS===1 ? "act" : ""}
                onClick={()=>{
                    setLastS(1)
                    setStatusNEW("status=alive")}}>
                        Alive</button>
                <button 
                className={lastS===2 ? "act" : ""}
                onClick={()=>{
                    setLastS(2)
                    setStatusNEW("status=dead")}}>
                        Dead</button>
                <button 
                className={lastS===3 ? "act" : ""}
                onClick={()=>{
                    setLastS(3)
                    setStatusNEW("status=unknown")}}>
                        Unknown</button>
                <button 
                className={lastS===4 ? "act" : ""}
                onClick={()=>{
                    setLastS(4)
                    setStatusNEW("")}}>
                        Any</button>
            </div>
        </div>

        <div className='gender'>
            <h4>Gender:</h4>
            <div className="buttons">
                <button 
                className={lastG===1 ? "act" : ""}
                onClick={()=>{
                    setLastG(1)
                    setGenderNEW("gender=female")}}>
                        Female</button>
                <button 
                className={lastG===2 ? "act" : ""}
                onClick={()=>{
                    setLastG(2)
                    setGenderNEW("gender=male")}}>
                        Male</button>
                <button 
                className={lastG===3 ? "act" : ""}
                onClick={()=>{
                    setLastG(3)
                    setGenderNEW("gender=genderless")}}>
                        Genderless</button>
                <button 
                className={lastG===4 ? "act" : ""}
                onClick={()=>{
                    setLastG(4)
                    setGenderNEW("gender=unknown")}}>
                        Unknown</button>
                        <button 
                className={lastG===5 ? "act" : ""}
                onClick={()=>{
                    setLastG(5)
                    setGenderNEW("")}}>
                        Any</button>
            </div>
        </div>
        </section>

        <section className='results'>
            {linkFIN!=="https://rickandmortyapi.com/api/character?&&"
            ?<Cards chara={chFIL}/>
            : ""}
        </section>
    </div>
    )
}

export default Search