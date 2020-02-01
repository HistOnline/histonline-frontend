import React, { Component } from 'react'

import ProtecetdPage from '../../components/ProtectedPage'
import Aside from '../../components/Aside';
import logo from '../../img/logo_eosina.png';
import Microscope from './components/Microscope';
import Description from './components/Description';
import Footer from '../../components/Footer';

import LaminaContext from './context'
import Laminas from '../../services/crud/laminas';

import { KeyboardArrowDown } from '@material-ui/icons';

export default class Lamina extends Component {
  static contexType = LaminaContext

  state = {
    lamina: null,
    count: 0
  }

  loadData = () => {
    const slug = this.props.match.params.slug
    Laminas.get(slug)
      .then(response => {
        this.setState({ lamina: response.data })
      })
      .catch(err => console.log('Erro ao obter lâmina:', err))
  }
  componentDidMount(){
    this.loadData()    
  }

  componentDidUpdate(prevProps){
    if(this.props.match.params.slug !== prevProps.match.params.slug) this.loadData()
  }


  render(){

    const lamina = this.state.lamina

    return (
      <div>
        <ProtecetdPage>
          <main>
            <Aside />
            <section id="page" className={`wrap`}>
              <LaminaContext.Provider value={this.state}>
                {lamina ? [
                  <section>
                    <img alt="Logo" src={logo} className="logo" />
                    <Microscope lamina={lamina} />
                    <h3>ID: {this.props.match.params.slug}</h3>
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
}