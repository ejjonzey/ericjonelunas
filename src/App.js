import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import GlobalNav from './components/GlobalNav';
import GlobalFooter from './components/GlobalFooter';
import About from './components/About.jsx';
import Specializations from './components/Specializations.jsx';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <Router>
      <main className="App">
        <GlobalNav/>
          <About />
          <Specializations />
          <Projects />
        <GlobalFooter/>
      </main>
      </Router>
    );
  }
}

export default App;
