import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Menu, ExpandMore } from '@material-ui/icons';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Input from '@material-ui/core/Input';

export default class Aside extends Component {
  constructor(props){
    super(props);

    this.state = {
      menuIsVisible: false,
      toggleMenuVisibility: () => this.state.menuIsVisible ? this.setState({ menuIsVisible : false }) : this.setState({ menuIsVisible : true }),
      search: "",
      nav: [
        {
          categoria : {
            nome : "Assunto XYZ",
            id: 1
          },
          laminas : [
            { nome : "Lamina 1",
            id : 1 },
            { nome : "Lamina 2",
            id : 2 }
          ]
        },
        {
          categoria : {
            nome : "Assunto HJK",
            id: 1
          },
          laminas : [
            { nome : "Lamina 7",
            id : 1 },
            { nome : "Lamina 20",
            id : 2 }
          ]
        }
      ]
    }
  }

  mapSearch = (v, i) => {
    let search = this.state.search.toLowerCase();

    // Verifica se a busca confere com a categoria, se sim mostrar tudo da categoria, independente se para os filhos
    let categoryMatch = v.categoria.nome.toLowerCase().includes(search);
    if(categoryMatch){
      return (
      <div>
        <ListItem className="category_title_list">
          {v.categoria.nome}
        </ListItem>
        {v.laminas.map( lam => (
          <ListItem button>
            {lam.nome}
          </ListItem>
        ))}
      </div>
      )
    }

    // Caso não tenha em categoria verifica se seus itens tem e armazena em laminas temp
    let laminas_temp = [];
    v.laminas.forEach( lam => {
      if(lam.nome.toLowerCase().includes(search)) laminas_temp.push( lam )
    })

    console.log(laminas_temp)

    if(laminas_temp.length){
      return (
        <div>
          <ListItem className="category_title_list">
            {v.categoria.nome}
          </ListItem>
          {laminas_temp.map( lam => (
            <ListItem button>
              {lam.nome}
            </ListItem>
          ))}
        </div>
      )  
    }
  }

  changeSearchInputValue = e => {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <aside className={`${this.props.className} ${this.state.menuIsVisible ? "opened" : "closed"}`}>
        <IconButton id="main_menu_bt" className="just_mobile" onClick={this.state.toggleMenuVisibility}>
          <Menu/>
        </IconButton>
        <nav>
          <List
            component="ul"
            subheader={<ListSubheader component="div">Selecione um assunto</ListSubheader>}
          > 
            <ListItem>
              <Input
                placeholder="Pesquisa"
                value={this.state.search}
                onChange={this.changeSearchInputValue}
              />
            </ListItem>
            {this.state.nav.map(this.mapSearch)}
          </List>
        </nav>
      </aside>
    );
  }   
}