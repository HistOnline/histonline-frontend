import React, { Component } from 'react';
import ProtecetdPage from './protected_page';
import Aside from './aside';
import logo from '../img/logo_eosina.png';
import Microscope from './microscope';
import OnVisible from 'react-on-visible';
import About from './about';
import Footer from './footer';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Fullscreen, KeyboardArrowDown } from '@material-ui/icons';


class Main extends Component {
  
  state = {
    visibility: false,
    className: ""
  }

  onScroll = (visibility) => {
    console.log("onScroll", visibility);
    if(visibility){
      this.setState({ className : "scrolled", visibility : true })
    }else{
      setTimeout( () => {
        if(!this.state.visibility) this.setState({ className : "", visibility : false })
      }, 2000)
    }
  }

  resetScrollClass = () => {
    this.setState({ className : "", visibility : false })
  }

  render() {

    const scrollClass = this.state.className;

    return (
      <ProtecetdPage>
        <main>
          <Aside className={`${scrollClass}`}/>
          <section id="page" className={`wrap ${scrollClass}`}>
            
            <OnVisible onChange={this.onScroll} bounce="true" percent="100"/>
            <About className={`${scrollClass}`}/>
          </section>
        </main>
        <Footer/>
      </ProtecetdPage>
    );
  }   
}

export default Main;