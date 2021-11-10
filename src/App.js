import './App.css';

import React from 'react';
import Bouton from './Bouton';
import Board from './Board';

function App() {
  return (
    <div>
      <div>
      <Bouton name="Jeanne"/>
      <Bouton name="Martine"/>
      <Bouton name="Claude"/>
      </div>
      <div>
        <Board/>
      </div>
    </div>

    
  );


}

export default App;
