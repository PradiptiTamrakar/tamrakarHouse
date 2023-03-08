import { Routes, Route } from "react-router-dom"
import Home from "../containers/home"
import About from "../containers/about"
import Contact from "../containers/contact"

const ConditionalRoute =()=> {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default ConditionalRoute