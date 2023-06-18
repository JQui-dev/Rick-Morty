import React from "react"

import NavBar from "./components/NavBar"

import Landing from "./pages/Landing"
import Error from "./pages/Error"

import Search from "./pages/Search"
import AllCh from "./pages/AllCh"
import Ch from "./pages/Ch"

import "./App.scss";

import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="*" element={<Error/>}></Route>

          <Route path="/characters" element={<AllCh/>}></Route>
          <Route path="/ch/:id" element={<Ch/>}></Route>
          <Route path="/search" element={<Search/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App