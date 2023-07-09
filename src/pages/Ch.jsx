import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChInfo from '../components/ChInfo'

import "./style/Ch.scss";

function Ch() {
    
    const { id } = useParams()
    const [ error, setError ] = useState("")

    const [ chara, setChara ] = useState({})
    const [ epi, setEpi ] = useState("")
    const [ date, setDate ] = useState("")

    useEffect(()=>{
        fetchCh()
    }, [])
    
    useEffect(()=>{
        explicitInfo()
    },[chara]);

    const fetchCh = async () => {
        try {
            const fetchData = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            if(fetchData.ok) {
                const jsonData = await fetchData.json()
                setChara(jsonData)
            } else {
                setError("Error fetching data")
            }
        } catch (error) {
            setError(`Error: ${error}`)
        }
    }

    if(!chara) {
        return <h1>Loading</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }

    const explicitInfo = async () => {
        let length = chara.episode.length;
        if (length>1) {
            setEpi(`${length} episodes`)
        } else {
            console.log(`${length} `)
            setEpi(`${length} episode`)
        }

        let cDate = new Date(chara.created)
        setDate(cDate.toLocaleDateString())
    }

    return (
        <section className='Ch'>
            <img src={chara.image} alt={`${chara.name} image`}/>
            <div className='info'>
                <ChInfo title="I'm" info={chara.name}/>
                <ChInfo title="A" info={`${chara.gender} ${chara.species}`}/>
                <ChInfo title="From" info={chara && chara.origin && chara.origin.name}/>
                <ChInfo title="Status" info={chara.status}/>
                <ChInfo title="Has appear in" info={epi}/>
                <ChInfo title="Created" info={date}/>
            </div>
        </section>
  )
}

export default Ch