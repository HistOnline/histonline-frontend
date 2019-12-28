import React, { Component } from 'react';
import ProtecetdPage from './protected_page';
import Aside from './aside';
import logo from '../img/logo_eosina.png';
import Footer from './footer';

class Main extends Component {
  
  state = {
    visibility: false,
    className: ""
  }

  // onScroll = (visibility) => {
  //   console.log("onScroll", visibility);
  //   if(visibility){
  //     this.setState({ className : "scrolled", visibility : true })
  //   }else{
  //     setTimeout( () => {
  //       if(!this.state.visibility) this.setState({ className : "", visibility : false })
  //     }, 2000)
  //   }
  // }

  // resetScrollClass = () => {
  //   this.setState({ className : "", visibility : false })
  // }

  render() {

    const scrollClass = this.state.className;

    return (
      <ProtecetdPage>
        <main>
          <Aside className={`${scrollClass}`}/>
          <section id="page" className={`wrap ${scrollClass}`}>
            <section className={`first_col ${scrollClass}`}>
              <img src={logo} className="logo"/><br/>
              Bem vindo ao HistOnline, selecione uma das lâminas no menu lateral para começar
            </section>
          </section>
        </main>
        <Footer/>
      </ProtecetdPage>
    );
  }   
}

export default Main;