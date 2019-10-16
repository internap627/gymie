import React, { useState, useEffect } from 'react';
import './App.scss';
import Trainers from './Trainers';

function App() {
  const [stateString, setString] = useState('logo');
  useEffect(() => {
    setTimeout(() => {
      setString('trainers')
    }, 5000);
  })
  return (
    <div className="App">
      {stateString === 'logo' ? <div className='logo'>Gymie</div> : ''}
      {stateString === 'trainers' ? <Trainers /> : ''}
    </div>
  );
}

export default App;
