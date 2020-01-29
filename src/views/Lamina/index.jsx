import React, { useState, useEffect } from 'react'

import ProtecetdPage from '../../components/ProtectedPage'
import Aside from '../../components/Aside';
import logo from '../../img/logo_eosina.png';
import Microscope from './components/Microscope';
import Description from './components/Description';
import Footer from '../../components/Footer';

import LaminaContext from './context'
import Laminas from '../../services/crud/laminas';

import { KeyboardArrowDown } from '@material-ui/icons';


const Lamina = props => {
  
  const [lamina, setLamina] = useState(null)
  
  const context = {
    lamina: null,
    count: 0
  }

  // Não funciona, transformar em classe
  // useEffect(() => {
  //   setInterval(() => {
  //     context.count = context.count+1
  //     console.log(context.count)
  //   }, 1000)
  // }, [])

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
            <LaminaContext.Provider value={context}>
              {context.count}
              {lamina ? [
                <section>
                  <img alt="Logo" src={logo} className="logo" />
                  <Microscope lamina={lamina} />
                  <h3>ID: {props.match.params.slug}</h3>
                  <span className="scroll_message"><KeyboardArrowDown /> Role a página para mais informações</span>
                </section>,
                <Description lamina={lamina} />
              ] : "Carregando..."}
            </LaminaContext.Provider>
          </section>
        </main>
        <Footer />
      </ProtecetdPage>
    </div >
  )
}

export default Lamina
