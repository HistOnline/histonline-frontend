import React, { useState, useEffect } from 'react'
import Login from './login'
import axios from 'axios'

const ProtecetdPage = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [signedIn, setSignedIn] = useState(false)

  useEffect(() => {
    // Verifica se está logado
    // Verifica se tem salvo o hash no sessionStorage
    console.log(localStorage.getItem('histonline_token'))
    if (localStorage.getItem('histonline_token')) {
      // Valida no backend o hash
      const hash = localStorage.getItem('histonline_token')
      axios.post(`${process.env.REACT_APP_API}/users/v1/vhash`,
        { hash })
        .then(function (response) {
          setLoading(false)
          setSignedIn(true)
        })
        .catch((err) => {
          console.log('Erro de autenticação:', err)
          setLoading(false)
          setSignedIn(false)
        })

    } else {
      setLoading(false)
      setSignedIn(false)
    }
  }, [])

  return (
    loading ? "Carregando..."
      : signedIn ? children
        : <Login error="Você precisa logar para acessar o sistema" />
  )
}

export default ProtecetdPage