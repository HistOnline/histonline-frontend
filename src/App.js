import React, { Component } from 'react';
import Login from './components/login';
import Main from './components/main';
import Lamina from './components/lamina';
import Err404 from './components/err404';
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
            <Route exact path="/laminas/:slug" component={Lamina} />
            <Route component={Err404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
