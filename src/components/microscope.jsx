import React, { Component, useState, useEffect } from 'react';
import Zoom from './zoom';
import axios from 'axios'
import { Div } from '../styles/microscope'

const Svg = ({ svg }) => {

  // console.log('SVG', svg)

  if (!svg) {
    return "Sem arquivo de máscara"
  }
  return <Div
    dangerouslySetInnerHTML={{ __html: svg }}
    className="svg_mask"
    // color={this.props.color}
  />
}

export default class Microscope extends Component {

  state = {
    mascaras: []
  }

  /**
   * Função que coleta svg e atualiza no state assíncronamente
   * 
   * @param {string} url 
   * @param {integer} index 
   */
  getSVG = (url, index) => {

    console.log('novo svg')
    fetch(url)
      .then(res => res.text())
      .then(text => {
        let mascaras = [...this.state.mascaras]
        mascaras[index].svg = text
        this.setState({ mascaras }, () => console.log('mascaras', this.state.mascaras))
      });

  }

  componentDidMount() {
    // console.log('montou')
    // let mascaras = this.props.lamina.mascaras,
    //   tmpMascaras = []
    // mascaras.map(mascara => {
    //   tmpMascaras.push({
    //     url: mascara.vector,
    //     svg: null
    //   })
    // })
    
    // this.setState({ mascaras: tmpMascaras }, () => {
    //   this.state.mascaras.map( (mascara, index) => {
    //     this.getSVG( mascara.url, index)
    //   })
    // })
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('verificando se tem que atualizar')
    // Verificar se o slug da lâmina deve mudar
    console.log(this.props.lamina.ID === nextProps.lamina.ID)
    if(this.props.lamina.ID === nextProps.lamina.ID){
      // Verificar se existe state.mascaras ou se está igual ao antigo ainda
      if(this.state.mascaras.length !== nextState.mascaras.length) return true
      this.state.mascaras.map( mascara => {
        if(!mascara.svg) return true
      })
      return false
    }
    console.log('states', this.state.mascaras, nextState.mascaras)

    // Verifica se algum svg do state.mascaras

    return true
  }

  componentDidUpdate(){
    let mascaras = this.props.lamina.mascaras,
      tmpMascaras = []
      if(mascaras){
        mascaras.map(mascara => {
          tmpMascaras.push({
            url: mascara.vector,
            svg: null
          })
        })
        
        this.setState({ mascaras: tmpMascaras }, () => {
          this.state.mascaras.map( (mascara, index) => {
            this.getSVG( mascara.url, index)
          })
        })
      }
  }

  render() {

    let lamina = this.props.lamina

    return (
      <section id="microscope">
        {lamina ? <div id="microscope_imgs">
          <img src={lamina.imagem[0]} />
          {this.state.mascaras ? this.state.mascaras.map( mascara => {
            return <Svg svg={mascara.svg} color={mascara.color} />
            // return mascara.title
          }) : null }
          {/* <Zoom lens="200" href="lamina_y_200" top="45" left="45" /> */}
        </div> : null}
      </section>
    )
  }

}