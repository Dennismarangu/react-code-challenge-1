import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
     <NavBar />
     <main className="main-content"></main>
     <Home />
     <About />
    </div> 
  );
}

export default App;
