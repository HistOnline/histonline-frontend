import React, { Component } from 'react';
import InputPlaceholder from './input_placeholder';
import logo from '../img/logo_white.png';

const aviso = (info) => {
  console.log(info);
  
  return(
    <div id="aviso">{info}</div>
  )
}

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: "none",
      password: "none"
    }
  }

  submit(){
    const username = this.state.username;
    const password = this.state.password;

    fetch(`${process.env.REACT_APP_API}/auth` , {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(function(data) {
      console.log(data);  
      return data.text();
    }).then(function(jwt){      
      const token = JSON.parse(jwt).access_token;
      if(token) localStorage.setItem("histonline_token", token);
      if(token) window.location.href = "./";
    })
  }

  getUsername = (username) => {
    this.setState({ username }, () => {
      console.log(this.state.username); 
    });    
  }

  getPassword = (password) => {
    this.setState({ password }, () => {
      console.log(this.state.password); 
    });    
  }

  render (){
    return(
      <section id="loginPage">
        <div className="login_box">
          <header className="App-header">
          <img alt="Logo HistOnline" src={logo}/>
          </header>
          <section>
            <InputPlaceholder type="text" placeholder="Digite seu usuário ou email" id="usuario" getValue={this.getUsername}/>
            <InputPlaceholder type="password" placeholder="Digite sua senha" id="senha" getValue={this.getPassword} />
            <div className="alignRight">
            <button type="submit" onClick={event => this.submit(event)}>Entrar</button>
            </div>
          </section>
          <p>
          Breve um atlas digital para você!
          </p>
        </div>

        <div className="whatsthis just_desktop">
          <h3>O que é isso?</h3><br/>
          <span>Descrição da lâmina com curiosidades e principais características em foco.</span>
        </div>

        {this.props.error ? aviso(this.props.error) : null }
        
        </section>
    )
  }
}

export default Login;