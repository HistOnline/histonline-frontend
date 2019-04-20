import React, { Component } from 'react';
import logo from '../img/logo_white.png';

import { Menu } from '@material-ui/icons';

import Collapsible from 'react-collapsible';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class Aside extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <aside>
        <Menu/>
        <img src={logo} />
        <Collapsible trigger="Start here">
          <p>This is the collapsible content. It can be any element or React component you like.</p>
          <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>  
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