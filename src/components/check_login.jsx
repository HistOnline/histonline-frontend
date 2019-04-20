import React, { Component } from 'react';
import Login from './login';

class CheckLogin extends Component {
    constructor(props){
        super(props);

        // 1 = logado, 2 = logando, 0 = negado
        this.state = {
            logged: false
        }        
    }

    checkLogin = () => {
        const localToken = localStorage.getItem("histonline_token");

        if(localToken){
            this.setState({ logged : true })
        }   
    }

    componentDidMount(){
        this.checkLogin();
    }

    render(){
        return (
            <div>
            {this.state.logged ? this.props.children : <Login error="Você precisa logar para acessar o sistema"/> }
            </div>
        );
    }   
}

export default CheckLogin;