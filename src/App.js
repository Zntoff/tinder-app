import React from 'react';
import './App.css';
import CreateUserForm from './createUserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tinder App</h1>
      </header>
      <main>
        <CreateUserForm />
        {/* Otros componentes de tu aplicación */}
      </main>
    </div>
  );
}

export default App;
