import React from 'react';
import './App.css';
import GoogleAuthButton from './components/GoogleAuthButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        SUPER EASYPONG APPLICATION DE FEU
      </header>
      <main>
        <GoogleAuthButton />
      </main>
    </div>
  );
}

export default App;
