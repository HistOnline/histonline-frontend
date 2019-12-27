import React, { useState } from 'react'
import InputPlaceholder from './input_placeholder'
import logo from '../img/logo_white.png'
import axios from 'axios'

/**
 * Componente de aviso na tela de login, inicialmente
 * @param {string} info 
 */
export const Aviso = info => {
  console.log('Aviso:', info);
  return <div id="aviso">{info}</div>
}

const Login = ({error}) => {

  const [user, setUser] = useState(null)
  const [pass, setPass] = useState(null)

  const submit = () => {

    axios.post(`${process.env.REACT_APP_API}/users/v1/auth`, {
      user,
      pass
    })
      .then(function (response) {
        const token = response.data.hash;
        if (token) localStorage.setItem("histonline_token", token);
        if (token) window.location.href = "./";
      })
      .catch((err) => console.log('Erro de login:', err))
  }

  return (
    <section id="loginPage">
      <div className="login_box">
        <header className="App-header">
          <img alt="Logo HistOnline" src={logo} />
        </header>
        <section>
          <InputPlaceholder type="text" placeholder="Digite seu usuário ou email" id="usuario" onChange={e => setUser(e.target.value)} />
          <InputPlaceholder type="password" placeholder="Digite sua senha" id="senha" onChange={e => setPass(e.target.value)} />
          <div className="alignRight">
            <button type="submit" onClick={submit}>Entrar</button>
          </div>
        </section>
        <p>
          Breve um atlas digital para você!
          </p>
      </div>

      <div className="whatsthis just_desktop">
        <h3>O que é isso?</h3><br />
        <span>Descrição da lâmina com curiosidades e principais características em foco.</span>
      </div>

      {error ? Aviso(error) : null}

    </section>
  )

}

export default Login;