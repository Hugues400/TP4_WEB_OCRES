import './App.css';

import React from 'react';
import Bouton from './Bouton';
import Board from './Board';

function App() {
  return (
    <div>
      <Bouton name="Jeanne"/>
      <Bouton name="Martine"/>
      <Bouton name="Claude"/>
      <Board>
        
      </Board>
    </div>

    
  );


}

export default App;
