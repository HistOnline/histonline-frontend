import React, { Component } from 'react';
import Login from './components/login';
import Main from './components/main';
import './scss/all.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/:name_id?" component={Main} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
