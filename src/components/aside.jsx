import React, { Component } from 'react';
import logo from '../img/logo_white.png';

class Aside extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <aside>
        <img src={logo} />
        <ul>
          <li>
            <input type="search" placeholder="Filtro de lâminas" />
          </li>
          <li>Categoria A
            <ul>
              <li>Lamina A 10x</li>
              <li>Lamina A Zoom 40x</li>
              <li>Lamina A</li>
            </ul>
          </li>
        </ul>
      </aside>
    );
  }   
}

export default Aside;