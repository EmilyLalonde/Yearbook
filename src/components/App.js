import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import './App.css';
import AddStudentForm from './AddStudentForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
    this.addStudent = this.addStudent.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  addStudent(newStudent) {
    this.setState({
      students: [...this.state.students, newStudent]
    })
  }

  deleteCard(id) {
    const filteredStaff = this.state.staff.filter(instructor => {
      return instructor.id !== id
    })
    const filteredStudents = this.state.students.filter(student => {
      return student.id !== id
    })
    this.setState({staff: filteredStaff, students: filteredStudents});
  }
  
  render() {
    return (
      <div className="App">
      <h1>Turing Yearbook</h1>
        <AddStudentForm addStudent={this.addStudent}/>
        <Cohort instructors={this.state.staff} students={this.state.students} deleteCard={this.deleteCard}/>
      </div>
    );
  }
}

export default App;
