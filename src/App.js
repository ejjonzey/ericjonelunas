import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import GlobalNav from './components/GlobalNav';
import GlobalFooter from './components/GlobalFooter';
import Profile from './components/Profile.jsx';
import Specializations from './components/Specializations.jsx';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <GlobalNav/>
        <Route exact path='/' component={Profile} />
        <Route exact path='/Specializations' component={Specializations} />
        <Route exact path='/Projects' component={Projects} />
        <GlobalFooter/>
      </div>
      </Router>
    );
  }
}

export default App;
