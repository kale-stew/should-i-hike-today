import React from 'react';
import router from '../router';
import './App.css';

export function App( { children } ) {
  return (
    <div className="app">
      { router }
    </div>
  );
}

export default App;
  