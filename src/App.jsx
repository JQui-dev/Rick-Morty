import './App.scss'

import { useState, useEffect } from 'react';

import Intro from './components/Intro'
import Display from './components/Display'
import Navigation from './components/Navigation';

function App() {
  let [ api, setApi ] = useState("https://rickandmortyapi.com/api/character");
  let [ data, setData ] = useState([]);
  let [ page, setPage ] = useState([]);

  useEffect(()=>{
      fetchData();
  }, [api]);

  const fetchData = async () => {
      const res = await fetch(api)
      const jsonData = await res.json();
      console.log(jsonData)
      setData(jsonData.results)
      setPage(jsonData.info)
  }

  return (
    <div className="App">
      <Intro setApi={setApi}/>
      <Display data={data}/>
      <Navigation page={page} setApi={setApi}/>
    </div>
  )
}

export default App
