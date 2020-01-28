import React, { useEffect } from 'react'

import ProtecetdPage from '../../components/ProtectedPage';
import Aside from '../../components/Aside';
import logo from '../../img/logo_eosina.png';
import Footer from '../../components/Footer';

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
