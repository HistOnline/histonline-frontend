import React, { Component } from 'react';
import Login from './components/login';
import Main from './components/main';
import './scss/all.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" component={Login} />
          <Route exact path="/:name_id?" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
