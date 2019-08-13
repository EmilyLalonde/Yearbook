import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    return (
      <div className="App">
      <h1>Turing Yearbook</h1>
        <Cohort instructors={this.state.staff} students={this.state.students}/>
      </div>
    );
  }
}

export default App;
