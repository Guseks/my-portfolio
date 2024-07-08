import "./App.css";
import linkedInImage from "./assets/LinkedIn.jpg";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

/*
TODO: Create sections of portfolio: 
  - Navigation
  - About me
  - Work & Experience
  - Projects

*/

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <nav className="p-10 font-bold text-2xl border-b-2 w-full flex justify-center relative bg-stone-950">
        <ul className="text-white flex gap-10">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
        <div className="w-20 absolute right-10">
          <img />
          LinkedIn
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
