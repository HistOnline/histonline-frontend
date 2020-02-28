import React, { Component } from 'react'
import {ContentSection} from './styles'
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
  contentWrap = React.createRef();
  start = null

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
    },
    virgin: true,
    fullScreen: false,
    toggleFullScreen: () => {
      console.log('prevOffsetTop', this.contentWrap.current.offsetTop)
      console.log('prevOffsetLeft', this.contentWrap.current.offsetLeft)
      console.log('PrevWidth', this.contentWrap.current.getBoundingClientRect().width)
      console.log('prevHeight', this.contentWrap.current.getBoundingClientRect().height)
      // Deve pegar dimensões também para manter e não engordar
      // this.contentWrap.current.style = {
      //   position: 'absolute',
      //   top: this.contentWrap.current.offsetTop
      // }
      // this.contentWrap
      if(!this.state.fullScreen){
        this.setState({ 
          virgin: false,
          fullScreen: true,
          contentStyles: {
            top: this.contentWrap.current.offsetTop,
            left: this.contentWrap.current.offsetLeft,
            width: this.contentWrap.current.getBoundingClientRect().width,
            height: this.contentWrap.current.getBoundingClientRect().height
          }
        })
      }else{
        this.setState({ 
          virgin: false,
          fullScreen: false
        })
      }
      // }, () => window.requestAnimationFrame(this.animationStep))
     },
     contentStyles: {
       top: 0,
       left: 0,
       width: 0,
       height: 0
     }
  }


  animationStep = timestamp => {
    if(!this.start) this.start = timestamp
    let frames = 500
    let target = frames + this.start
    let percent = (timestamp - this.start)/(target - this.start)
    let targetWidth = window.innerWidth
    let targetHeight = window.innerHeight
    const { top, left, width, height } = this.state.contentStyles
    
    // console.log('timestamp', this.state.contentStyles.top, this.state.contentStyles.top - this.state.contentStyles.top*percent)
    // console.log('timestamp', timestamp, target, percent)
    console.log(this.contentWrap.current, this.contentWrap.current.style, `${width + (targetWidth-width)*percent}px !important`)
    // top position animation
    this.contentWrap.current.style.top = `${top - top*percent}px !important`
    // this.contentWrap.current.style.left = `${left - left*percent}px !important`
    // width animation
    // this.contentWrap.current.style.width = `${width + (targetWidth-width)*percent}px !important`
    if(timestamp < target){
      window.requestAnimationFrame(this.animationStep)
    }else{
      this.start = null
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
                  <img alt="Logo" src={logo} className="logo" />,
                  <ContentSection 
                    ref={this.contentWrap}
                    virgin={this.state.virgin}
                    fullScreen={this.state.fullScreen}
                    top={this.state.contentStyles.top}
                    left={this.state.contentStyles.left}
                    width={this.state.contentStyles.width}
                    height={this.state.contentStyles.height}
                  >
                    <Microscope lamina={lamina} />
                    <span className="scroll_message"><KeyboardArrowDown /> Role a página para mais informações</span>
                    <Description lamina={lamina} />
                  </ContentSection>
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