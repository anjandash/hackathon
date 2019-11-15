import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Card from './Components/Card/Card'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">

          <div className="header">
          </div>

          <div className="CardHolder">
            <Card from="P. Domenicani" to="NOI"></Card>
          </div>
          
        </header>
      </div>
    </Router>

  );
}

export default App;