import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import { Element } from "react-scroll";

function App() {
  return (
    <div id="root">
      <Header />
      <Element name="profile-photo" >
        <Home/>
      </Element>
      <Element name="about">
        <About/>
      </Element>
      <Element name="skills">
        <Skills/>
      </Element>
      <Element name="portfolio">
        <Portfolio/>
      </Element>
    </div>
  );
}

export default App;
