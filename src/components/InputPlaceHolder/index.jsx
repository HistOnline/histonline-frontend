import React, { Component } from 'react';

class InputPlaceholder extends Component {

    state = { isempty: true }
    
    /**
     * Verifica se o input está cheio para 
     * assim poder atribuir classe de estilo
     */
    onChangeFunc = (input, value) => {
        input.className = value === '' ? '' : 'filled'
    }

    render(){
        return (        
        <div className="placeholder_input">
            <input type={this.props.type} id={this.props.id} onChange={this.props.onChange ? e => {
                this.props.onChange(e)
                this.onChangeFunc(e.target, e.target.value)
            } : null } className={this.state.inputClass} />
            <label htmlFor={this.props.id}>{this.props.placeholder}</label>
        </div>
        );
    }   
}

export default InputPlaceholder;