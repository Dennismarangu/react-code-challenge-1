import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TransactionTable from './components/TransactionTable';
import About from './components/About';

function App() {
  return (
    <div>
     <NavBar />
     <main className="main-content"></main>
     <TransactionTable />
     <About />
    </div> 
  );
}

export default App;
