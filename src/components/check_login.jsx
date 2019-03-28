import React, { Component } from 'react';
import Login from './login';

class CheckLogin extends Component {
    constructor(props){
        super(props);

        // 1 = logado, 2 = logando, 0 = negado
        this.state = {
            logged: false
        }

        this.CheckLogin();
        
    }

    CheckLogin = () => {
        const localToken = localStorage.getItem("histonline_token");

        if(localToken){
            fetch('http://localhost:5000/checkLogin' , {
            method: "GET",
            headers: {
                "Authorization": "JWT "+localToken
            }
            })
            .then( (data) => { 
                return data.text();
            }).then( (jwt) => {
                const logged = JSON.parse(jwt).logged;
                this.setState({logged});
            })
        }    
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