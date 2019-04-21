import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import { Menu, ExpandMore } from '@material-ui/icons';

import Collapsible from 'react-collapsible';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
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
      nav: [
        {
          "categoria" : "Assunto XYZ"
        }
      ]
    }
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
            />
            </ListItem>
              <ExpansionPanel className="category">
                <ExpansionPanelSummary className="category_title" expandIcon={<ExpandMore />}>
                  <ListItem>
                    Assunto A
                  </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className="laminas_list">
                  <ListItem button>
                    Lâmina A
                  </ListItem>
                </ExpansionPanelDetails>
              </ExpansionPanel>
          </List>
        </nav>
      </aside>
    );
  }   
}