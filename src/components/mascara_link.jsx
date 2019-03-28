import React, { Component } from 'react';

class MascaraLink extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <span className="mascara_link">{this.props.children}</span>
    );
  }   
}

export default MascaraLink;