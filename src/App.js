import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import React from "react";
import {Reveal} from "./components/Reveal.tsx";
function App() {

  return (
      <>
          <Navbar/>
          <Reveal>
              <Home/>

          </Reveal>
          <Reveal>
                <About/>
          </Reveal>
          <Reveal>
              <Skills/>
          </Reveal>
          <Reveal>
              <Projects/>
          </Reveal>

          <div className={"footer"}>
              <h1>Bo Hubbard</h1>
              <p>Feel free to contact me @ <span>bohubbard8@gmail.com</span> for any opportunities!</p>
              <div className={"socials"}>
                  <div className={"social"}>
                      <a href={"https://github.com/bubb4rd"}><i className='bx bxl-github'></i></a>
                  </div>
                  <div className={"social"}>
                      <a href={"https://www.linkedin.com/in/bo-hubbard-4988b2246/"}><i className='bx bxl-linkedin'></i></a>

                  </div>
                  <div className={"social"}>
                      <a href={"https://be.net/bubbard"}><i
                          className='bx bxl-behance'></i></a>

                  </div>
              </div>

          </div>
          <div className={"copyright"}>© Bo Hubbard 2024</div>
      </>
  );
}

export default App;
