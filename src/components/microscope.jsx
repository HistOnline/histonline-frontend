import React, { useState, useEffect } from 'react';
import Zoom from './zoom';
import axios from 'axios'
import { Div } from '../styles/microscope'

class Svg extends React.Component {
  state = {
    svg: null,
    loading: false,
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.text())
      .then(text => this.setState({ svg: text }));
  }

  render() {
    const { loading, svg } = this.state;
    if (loading) {
      return <div className="spinner"/>;
    } else if(!svg) {
      return <div className="error"/>
    }
    return <Div 
    dangerouslySetInnerHTML={{ __html: this.state.svg}} 
    className="svg_mask" 
    color={this.props.color}
    />;
  }
}

const Microscope = ({ lamina }) => {

  const { imagem, mascaras } = lamina

  console.log('lamina', lamina)

    return (
      <section id="microscope">
        <div id="microscope_imgs">
          <img src={imagem[0]} />
          {mascaras.map( mascara => {
            return <Svg url={mascara.vector} color={mascara.color}/>
          })}
          {/* <Zoom lens="200" href="lamina_y_200" top="45" left="45" /> */}
        </div>
        {/* <div className="legenda">
          <div />
          <div>
            <h4>Legenda</h4>
            <div className="legenda">
              {mascaras.map( mascara => {
                return <div>
                  <div className="color"></div>
                  <h4>{mascara.title}</h4>
                  <p>{mascara.description}</p>
                </div>
              })}
            </div>
          </div>
        </div> */}
      </section>
    );
}

export default Microscope;