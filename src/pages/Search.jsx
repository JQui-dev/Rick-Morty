import React, { useState, useEffect } from 'react'

import "./style/Search.scss"

import SearchBtn from '../components/SearchBtn'
import Cards from '../components/Cards'
import Pagination from '../components/Pagination'

function Search() {

    const [ found, setFound ] = useState(false)

    const difStatus = [ "alive", "dead", "unknown", "any"];
    const difGender = [ "male", "female", "genderless", "unknown", "any"];

    const [ api, setApi ] = useState("")

    const [ nameNEW, setNameNEW ] = useState("")
    const [ statusNEW, setStatusNEW ] = useState("")
    const [ genderNEW, setGenderNEW ] = useState("")

    const [ data, setData ] = useState([])
    const [ chFIL, setChFIL ] = useState([])

    useEffect(()=>{
        organizeLink()
    }, [ nameNEW, statusNEW, genderNEW ])

    const organizeLink = () => {
        const oLink = "https://rickandmortyapi.com/api/character?"
        const filter = [ nameNEW && nameNEW, statusNEW, genderNEW ]
        setApi(`${oLink}${filter.join("&")}`)
    }



    useEffect(() => {
        fetchIt();
      }, [api]);
    
      const fetchIt = async () => {
        try {
          const fetchData = await fetch(api);
          if(fetchData.ok) {
            setFound(true)
            const jsonData = await fetchData.json();
            setData(jsonData);
            setChFIL(jsonData.results);
          } else {
            setFound(false)
          }
        } catch (error) {
          console.log(`Error: ${error}`)
        }
      };


  return (
    <div className="Search">
        <section className="filters">

        <input className='name' placeholder='Name' type="text" onChange={(e)=>{
            let nameSearch = e.target.value
            if (nameSearch.length > 2) {
                return setNameNEW(`name=${nameSearch}`)
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

        {
            found ?
            <section className='results'>
                {api!=="https://rickandmortyapi.com/api/character?&&"
                ?<Cards chara={chFIL}/>
                : ""}
                <Pagination data={data} api={api} setApi={setApi}/>
            </section>
            : <h1>NOT FOUND</h1>
        }
    </div>
    )
}

export default Search