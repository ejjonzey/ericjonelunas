import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Header from './components/Header';
import GlobalFooter from './components/GlobalFooter';
import About from './components/About.jsx';
import Skills from './components/Skills';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <Router>
      <main className="App">
        <Header />
          <About />
          <Skills />
          <Projects />
        <GlobalFooter/>
      </main>
      </Router>
    );
  }
}

export default App;
