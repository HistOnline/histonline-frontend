import React, { useState, useEffect } from 'react'

import ProtecetdPage from '../../components/ProtectedPage'
import Aside from '../../components/Aside';
import logo from '../../img/logo_eosina.png';
import Microscope from './components/Microscope';
import Description from './components/Description';
import Footer from '../../components/Footer';

import Laminas from '../../services/crud/laminas';

import { KeyboardArrowDown } from '@material-ui/icons';

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
                <img alt="Logo" src={logo} className="logo" />
                <Microscope lamina={lamina}/>
                <h3>ID: {props.match.params.slug}</h3>
                <span className="scroll_message"><KeyboardArrowDown /> Role a página para mais informações</span>
              </section>,
              <Description lamina={lamina}/>
            ] : "Carregando..."}
          </section>
        </main>
        <Footer />
      </ProtecetdPage>
    </div >
  )
}

export default Lamina
