import React, { useState, useEffect } from 'react'

import ProtecetdPage from './protected_page';
import Aside from './aside';
import logo from '../img/logo_eosina.png';
import Microscope from './microscope';
import Footer from './footer';

import Laminas from '../services/crud/laminas';

import Button from '@material-ui/core/Button';
import { Fullscreen, KeyboardArrowDown } from '@material-ui/icons';

const Lamina = props => {

  const [lamina, setLamina] = useState(null)
  
  useEffect(() => {
    const slug = props.match.params.slug
    Laminas.get(slug)
      .then(response => {
        setLamina(response.data)
      })
      .catch(err => console.log('Erro ao obter lâmina:', err))
  }, [props.match.params.slug])

  return (
    <div>
      <ProtecetdPage>
        <main>
          <Aside />
          <section id="page" className={`wrap`}>
            {lamina ? [
              <section>
                <img src={logo} className="logo" />
                <Microscope lamina={lamina}/>
                <h3>ID: {props.match.params.slug}</h3>
                <span className="scroll_message"><KeyboardArrowDown /> Role a página para mais informações</span>
              </section>,
              <section id="descricao_lamina">
                <h1>Tecido X</h1>
                <p>{lamina.descricao}</p>
              </section>
            ] : "Carregando..."}
          </section>
        </main>
        <Footer />
      </ProtecetdPage>
    </div >
  )
}

export default Lamina
