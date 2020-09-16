import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import AddAuthor from './views/AddAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>  
        <Main path="/"/>
        <AddAuthor path="/new" />
        <EditAuthor path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
