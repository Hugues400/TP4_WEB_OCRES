import logo from './logo.svg';
import './App.css';
import Text from './text.js';

import React from 'react';

export default class Bouton extends React.Component{
    render(){
        return(
            <bouton>{this.props.name}</bouton>

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
