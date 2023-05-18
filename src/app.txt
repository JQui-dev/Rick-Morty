import "./App.scss";

import { useState, useEffect } from "react";

import Intro from "./components/Intro";
import Display from "./components/Display";
import Navigation from "./components/Navigation";

function App() {
  let [api, setApi] = useState("https://rickandmortyapi.com/api/character");
  let [data, setData] = useState([]);
  let [error, setError] = useState([]);

  let [page, setPage] = useState([]);
  let [nav, setNav] = useState(true);
  let [count, setCount] = useState(1);

  useEffect(() => {
    fetchData();
  }, [api]);

  const fetchData = async () => {
    const res = await fetch(api);
    if (!res.ok) {
      return setError((error = "NOT FOUND"));
    }
    const jsonData = await res.json();
    setData(jsonData.results);
    console.log(data);
    setPage(jsonData.info);
    setError((error = ""));
    console.log(api);
  };

  return (
    <div className="App">
      <Intro setApi={setApi} count={count} setCount={setCount} />
      <Display data={data} error={error} nav={nav} setNav={setNav} />
      <Navigation
        page={page}
        setApi={setApi}
        count={count}
        setCount={setCount}
        error={error}
        nav={nav}
      />
    </div>
  );
}

export default App;
