import React, { useState, useEffect } from 'react'

import "./style/Search.scss"

import SearchBtn from '../components/SearchBtn'
import Cards from '../components/Cards'
import Pagination from '../components/Pagination'

function Search() {

    const difStatus = [ "alive", "dead", "unknown" ];
    const difGender = [ "male", "female", "genderless", "unknown" ];
    const [ linkFIN, setLinkFIN ] = useState("")

    const [ nameNEW, setNameNEW ] = useState("")
    const [ statusNEW, setStatusNEW ] = useState("")
    const [ genderNEW, setGenderNEW ] = useState("")

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
            setData(jsonData);
            setChFIL(jsonData.results);
            console.log(jsonData);
          } else {
            console.log("Error fetching")
          }
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      };


      

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
                {
                difStatus.map((res, key)=>(
                    <SearchBtn key={key} what="status" newProp={res} setStatusNEW={setStatusNEW}/>
                ))
                }
            </div>
        </div>

        <div className='gender'>
            <h4>Gender:</h4>
            <div className="buttons">
                {
                difGender.map((res, key)=>(
                    <SearchBtn key={key} what="gender" newProp={res} setGenderNEW={setGenderNEW}/>
                ))
                }
            </div>
        </div>
        </section>

        <section className='results'>
            {linkFIN!=="https://rickandmortyapi.com/api/character?&&"
            ?<Cards chara={chFIL}/>
            : ""}
            <Pagination data={data} api={linkFIN} setApi={setLinkFIN}/>
        </section>
    </div>
    )
}

export default Search