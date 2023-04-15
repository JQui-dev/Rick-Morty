import './App.scss'

import { useState, useEffect } from 'react';

import Intro from './components/Intro'
import Display from './components/Display'

function App() {
  let api = "https://rickandmortyapi.com/api/character"
  let [ data, setData ] = useState([]);

  useEffect(()=>{
      fetchData();
  }, [api]);

  const fetchData = async () => {
      const res = await fetch(api)
      const jsonData = await res.json();
      console.log(jsonData.results)
      setData(jsonData.results)
  }

  return (
    <div className="App">
      <Intro/>
      <Display data={data}/>
    </div>
  )
}

export default App
