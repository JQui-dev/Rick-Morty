import './App.scss'

import { useState, useEffect } from 'react';

import Intro from './components/Intro'
import Display from './components/Display'
import Navigation from './components/Navigation';

function App() {
  let [ api, setApi ] = useState("https://rickandmortyapi.com/api/character");
  let [ data, setData ] = useState([]);
  let [ error, setError ] = useState([]);

  let [ page, setPage ] = useState([]);
  let [ count, setCount ] = useState(1);

  useEffect(()=>{
      fetchData();
  }, [api]);

  const fetchData = async () => {
      const res = await fetch(api);
        if (!res.ok) {
          return setError(error = "NOT FOUND")
        }
        const jsonData = await res.json();
        setData(jsonData.results)
        setPage(jsonData.info)
        setError(error = "")
        console.log(api)
  }

  return (
    <div className="App">
      <Intro setApi={setApi} count={count} setCount={setCount}/>
      <Display data={data} error={error}/>
      <Navigation page={page} setApi={setApi} count={count} setCount={setCount} error={error}/>
    </div>
  )
}

export default App
