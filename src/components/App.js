import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import AddStudentForm from '../AddStudentForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(newStudent) {
    this.setState({
      students: [...this.state.students, newStudent]
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Turing Yearbook</h1>
        <AddStudentForm addStudent={this.addStudent}/>
        <Cohort instructors={this.state.staff} students={this.state.students}/>
      </div>
    );
  }
}

export default App;
