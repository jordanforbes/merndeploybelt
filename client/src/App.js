import React from 'react';
import './App.css';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import PetForm from './components/PetForm';
import EditPet from './components/EditPet';
import ShowPet from './components/ShowPet';

function App() {
  return (
    <div className="container">
      <h1>Pets at the shelter</h1>
      <h4>These pets are looking for a good home</h4>
      <Link className="btn btn-outline-primary" to="/">Pets at the shelter</Link>
      <Link className="float-right" to="/new">+ Add a pet to the shelter</Link>

      <Router className="my-5">
        <Display path="/" />
        <PetForm path="/new" />
        <EditPet path="/edit/:_id" />
        <ShowPet path="/show/:_id" />
      </Router>
    </div>
  );
}

export default App;
