import React, { Component } from 'react';
import Search from "../components/search";

class SearchContainer extends Component{
    state = {
        value: 'Luis Fonsi'
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.input.value,'Enviado');
    }

    setInputRef = element => {
        this.input = element;
    }

    handleChange = event => {
        this.setState({
            value: event.target.value.replace(' ', '-')
        })
    }

    render(){
        return(
            <Search
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                setRef={this.setInputRef}
                value={this.state.value}
            />
        )
    }
}

export default SearchContainer;