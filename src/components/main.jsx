import React, { Component } from 'react';
import CheckLogin from './check_login';
import Aside from './aside';
import logo from '../img/logo_eosina.png';
import Microscope from './microscope';
import OnVisible from 'react-on-visible';
import About from './about';

class Main extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      visibility: false,
      className: ""
    }

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

  resetScrollClass = (visibility) => {
    console.log("reset", visibility)
    if(visibility){
      setTimeout( () => {
        this.setState({ className : "", visibility : false })
      }, 2000)
    }

    if(!this.state.visibility){
      this.setState({ className : "" })
    }
  }

  render() {

    const scrollClass = this.state.className;

    return (
      <CheckLogin>
        <main>
          <Aside className={`${scrollClass}`}/>
          <section id="page" className={`wrap ${scrollClass}`}>
            <section className={`first_col ${scrollClass}`}>
              <img src={logo}className="logo"/>
              <Microscope className={`${scrollClass}`}/>
              <h3>ID: {this.props.match.params.name_id}</h3>
              <span className="scroll_message">Role a página para mais informações</span>
            </section>
            <OnVisible onChange={this.onScroll} percent="100" >TESTE</OnVisible>
            <About className={`${scrollClass}`}/>
          </section>
        </main>
      </CheckLogin>
    );
  }   
}

export default Main;