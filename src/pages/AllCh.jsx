import React, { useEffect, useState } from "react";

import Pagination from '../components/Pagination'
import Cards from '../components/Cards'

import "./style/AllCh.scss";

function AllCh() {

  const [api, setApi] = useState("https://rickandmortyapi.com/api/character")

  const [data, setData] = useState([]);
  const [chara, setChara] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchIt();
  }, [api]);

  const fetchIt = async () => {
    try {
      const fetchData = await fetch(api);
      if(fetchData.ok) {
        const jsonData = await fetchData.json();
        setData(jsonData);
        setChara(jsonData.results);
        console.log(jsonData);
      } else {
        setError("Error fetching")
      }
    } catch (error) {
      setError(`Error: ${error}`)
    }
  };

  if(!data) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{`Error...${error}`}</h1>
  }

  return (
    <div className="AllCh">
        <Pagination data={data} setApi={setApi}/>
        <Cards chara={chara}/>
    </div>
  )
}

export default AllCh