import React, { Component } from 'react';
import Zoom from './zoom';

class Microscope extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <section id="microscope">
        <div id="microscope_img">
          <img src="img/laminas/cartilagem/cartilagemhialina_he_40.jpg" />
          <Zoom lens="200" href="lamina_y_200" top="45" left="45" />
        </div>
        <div id="legenda_fade"></div>
        <div id="legenda">
            <h4>Legenda</h4>
            Legenda aqui
          </div>
      </section>
    );
  }   
}

export default Microscope;