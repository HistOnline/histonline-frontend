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
    masksByAlias: {},
    setMaskStatus: ( alias, value ) => {
      let masksByAlias = JSON.parse(JSON.stringify(this.state.masksByAlias))
      masksByAlias[alias].status = value
      this.setState({ masksByAlias })
    },
    toggleMaskStatus: alias => {
      let masksByAlias = JSON.parse(JSON.stringify(this.state.masksByAlias))
      masksByAlias[alias].status = !masksByAlias[alias].status
      this.setState({ masksByAlias })
    }
  }

  loadData = () => {
    const slug = this.props.match.params.slug
    Laminas.get(slug)
      .then(response => {
        const lamina = response.data
        let masksByAlias = {}
        lamina.mascaras.map( mascara => {
          masksByAlias[mascara.alias] = {
            ...mascara,
            status: false
          }
        })
        this.setState({ lamina, masksByAlias })
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