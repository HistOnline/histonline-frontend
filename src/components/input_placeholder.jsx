import React, { Component } from 'react';

class InputPlaceholder extends Component {
    constructor(props){
        super(props);

        this.state = {
            isempty: true,
        }
    }

    onChangeFunc = (input, value) => {
        console.log("funcao 1");
        // Verifica se está cheio para colocar state filled 
        if(value === ""){
            input.className = ""
        }else{
            input.className = "filled"
        }
        //passa valor para o pai
        console.log("funcao 2");        
        this.props.getValue(value)
    }

    render(){
        return (        
        <div className="placeholder_input">
            <input type={this.props.type} id={this.props.id} onChange={event => this.onChangeFunc(event.target, event.target.value)} className={this.state.inputClass} />
            <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        </div>
        );
    }   
}

export default InputPlaceholder;