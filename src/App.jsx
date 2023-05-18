// MODULES
import { BrowserRouter, Route, Routes } from "react-router-dom"

// PAGES
import Error from "./pages/Error"

import HomePage from "./pages/HomePage"

import Characters from "./pages/Characters"
import Specific from "./pages/Specific"

import Places from "./pages/Places"
import About from "./pages/About"

// COMPONENTS
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

// STYLE
import "./App.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="characters/" element={<Characters/>}></Route>
          <Route path="characters/:id" element={<Specific/>}></Route>
          <Route path="places" element={<Places/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App