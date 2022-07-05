import React from 'react';
import './App.css';
import  Home from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
         
        <Home />       
         
      </Router>     
    </div>
  );
}

export default App;


