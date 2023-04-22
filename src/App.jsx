import './App.scss'

import { useState, useEffect } from 'react';

import Intro from './components/Intro'
import Display from './components/Display'
import Navigation from './components/Navigation';

function App() {
  let [ api, setApi ] = useState("https://rickandmortyapi.com/api/character");
  let [ data, setData ] = useState([]);
  let [ page, setPage ] = useState([]);
  let [count, setCount] = useState(1);

  useEffect(()=>{
      fetchData();
  }, [api]);

  const fetchData = async () => {
      const res = await fetch(api)
      const jsonData = await res.json();
      setData(jsonData.results)
      setPage(jsonData.info)
  }

  return (
    <div className="App">
      <Intro setApi={setApi} count={count} setCount={setCount}/>
      <Display data={data}/>
      <Navigation page={page} setApi={setApi} count={count} setCount={setCount}/>
    </div>
  )
}

export default App
