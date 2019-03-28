import React, { Component } from 'react';
import CheckLogin from './check_login';
import Aside from './aside';
import Microscope from './microscope';
import About from './about';

class Main extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <CheckLogin>
        <main>
          <Aside/>
          <section id="page" className="wrap">
            <Microscope/>
            <h3>ID: {this.props.match.params.name_id}</h3>
            <About/>
          </section>
        </main>
      </CheckLogin>
    );
  }   
}

export default Main;