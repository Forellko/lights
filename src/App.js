import './App.css';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('green');

  if (color === 'green') {
    setTimeout(() => {
      setColor('yellowDown');
    }, 3000);
  }

  if (color === 'red') {
    setTimeout(() => {
      setColor('yellowUp');
    }, 2000);
  }

  if (color === 'yellowUp') {
    setTimeout(() => {
      setColor('green');
    }, 1000);
  }

  if (color === 'yellowDown') {
    setTimeout(() => {
      setColor('red');
    }, 1000);
  }

  return (
    <div className="App">
      <div className={'green ' + (color === 'green' ? 'active' : '')}></div>
      <div
        className={
          'yellow ' +
          (color === 'yellowUp' || color === 'yellowDown' ? 'active' : '')
        }
      ></div>
      <div className={'red ' + (color === 'red' ? 'active' : '')}></div>
    </div>
  );
}

export default App;
