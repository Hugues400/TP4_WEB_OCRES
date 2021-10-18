import logo from './logo.svg';
import './App.css';
import Text from './text.js';

import React from 'react';

export default class Bouton extends React.Component{
    render(){
        return(
            <button>{this.props.name}</button>

        );
    }
}

function App() {
  return (
    <div>
    <Bouton name="Jeanne" />
    <Bouton name="Martine" />
    <Bouton name="Claude" />
    </div>
  );
}

//export default App;
