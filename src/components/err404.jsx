import React, { useEffect } from 'react'

import ProtecetdPage from './protected_page';
import Aside from './aside';
import logo from '../img/logo_eosina.png';
import Microscope from './microscope';
import Footer from './footer';

import Button from '@material-ui/core/Button';
import { Fullscreen, KeyboardArrowDown } from '@material-ui/icons';

const Lamina = props => {

  useEffect(() => {
    console.log(props)
  }, [])

  return (
    <div>
      <ProtecetdPage>
        <main>
          <Aside/>
          <section id="page" className={`wrap`}>
              <img src={logo} className="logo"/>
              <Microscope/>
              <h3>Erro 404</h3>
              Página não encontrada
          </section>
        </main>
        <Footer/>
      </ProtecetdPage>
    </div>
  )
}

export default Lamina
