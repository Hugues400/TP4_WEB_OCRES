import React from 'react';
import './App.css';

export default class Bouton extends React.Component{
    render(){
        return(
            <button>{this.props.name}</button>

        );
    }
}