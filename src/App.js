import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
//import GlobalNav from './components/GlobalNav';
//import Header from './components/Header.jsx';
import GlobalFooter from './components/GlobalFooter';
import About from './components/About.jsx';
import Skills from './components/Skills';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      
      <main className="App">
        
          <About />
          <Skills />
          <Projects />
        <GlobalFooter/>
      </main>
     
    );
  }
}

export default App;
