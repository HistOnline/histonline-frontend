import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './views/Login';
import Main from './views/Main';
import Lamina from './views/Lamina';
import Err404 from './views/Err404';

import './scss/all.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/laminas/:slug" component={Lamina} />
            <Route component={Err404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
