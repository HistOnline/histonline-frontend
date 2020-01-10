import React, { Component, useState, useEffect } from 'react';
import Zoom from './zoom';
import axios from 'axios'
import { Div } from '../styles/microscope'

export default class Microscope extends Component {

  state = {
    mascaras: []
  }

  resetMasks = () => {
    this.setState({ mascaras: [...this.props.lamina.mascaras] }, this.loadMasks)
  }

  /**
   * Função que coleta svg e atualiza no state assíncronamente
   * 
   * @param {string} url 
   * @param {integer} index 
   */
  loadMask = (url, index) => {

    // carrega nova máscara caso a máscara não exista
    fetch(url)
      .then(res => res.text())
      .then(text => {
        let mascaras = [...this.state.mascaras]
        mascaras[index].svg = text
        this.setState({ mascaras }, () => console.log('mascaras', this.state.mascaras))
      });
  }

  loadMasks = () => {
    let mascaras = this.state.mascaras
    mascaras.map(({ vector }, index) => {
      this.loadMask(vector, index)
    })
  }

  componentDidMount() {
    this.resetMasks()
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Verificando atualização')

    // Verificar se o slug da lâmina deve mudar
    console.log('CONDICIONAL 1', this.props.lamina.ID !== nextProps.lamina.ID)
    if (this.props.lamina.ID !== nextProps.lamina.ID) {
      this.resetMasks()
      return true
    }

    // Verificar se existe state.mascaras ou se está igual ao antigo ainda
    console.log('CONDICIONAL 2', this.state.mascaras.length !== nextState.mascaras.length)
    if (this.state.mascaras.length !== nextState.mascaras.length) return true

    let emptySVG = false
    this.state.mascaras.map(mascara => {
      if (!mascara.svg) emptySVG = true
    })
    console.log('CONDICIONAL 3', emptySVG)
    if (emptySVG) return true

    console.log('CONDICIONAL ÚLTIMA', false)
    return false
  }

  componentDidUpdate(prevProps) {
    console.log('chamando UPDATE')
    if (prevProps.lamina.ID !== this.props.lamina.ID) {
      console.log('RESETA')
      this.resetMasks()
    } else {
      console.log('só CARREGA')
      this.loadMasks()
    }
  }

  render() {
    console.log('chamando RENDER')

    return (
      <section id="microscope">
        {this.props.lamina ? <div id="microscope_imgs">
          <img src={this.props.lamina.imagem[0]} />
          {this.state.mascaras ? this.state.mascaras.map(({ svg, color }) => {
            return svg ? <Div
              dangerouslySetInnerHTML={{ __html: svg }}
              className="svg_mask"
              color={color}
            /> : 'Carregando...'
            // return mascara.title
          }) : null}
          {/* <Zoom lens="200" href="lamina_y_200" top="45" left="45" /> */}
        </div> : null}
      </section>
    )
  }

}