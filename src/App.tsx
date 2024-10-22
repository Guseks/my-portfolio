import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

/*
TODO: Create sections of portfolio: 
  - Navigation
  - About me
  - Work & Experience
  - Projects

*/
/*

<nav className="p-10 font-bold text-2xl  w-full flex justify-center relative bg-stone-950">
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
        <div className="w-20 absolute right-10 top-7 flex justify-center items-center hover:cursor-pointer">
          <img className="h-14" src={LinkedInLogo} />
        </div>
      </nav>

*/

function App() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
