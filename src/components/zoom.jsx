import React, { Component } from 'react';

class Zoom extends Component {
  constructor(props){
	super(props);

  this.style = {
			top: this.props.top+"%",
			left: this.props.left+"%",
		}
  }

  render() {
	  console.log(this.style);
	  
	return (
	  <div className="zoom" style={this.style}>
		<span>{this.props.lens}x</span>
	  </div>
	);
  }   
}

export default Zoom;