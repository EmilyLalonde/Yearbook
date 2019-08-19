import React, { Component } from 'react';
import './AddStudentForm.css';

class AddStudentForm extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: ''
    }
  }

  addNewStudentInformation = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitNewStudentInfo = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state)
    this.setState({
      name: '',
      quote: '',
      superlative: '',
      photo: ''
    })
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.addNewStudentInformation}></input>
        <input type="text" placeholder="quote" name="quote" value={this.state.quote} onChange={this.addNewStudentInformation}></input>
        <input type="text" placeholder="superlative" name="superlative" value={this.state.superlative} onChange={this.addNewStudentInformation}></input>
        <input type="text" placeholder="photo" name="photo" value={this.state.photo} onChange={this.addNewStudentInformation}></input>
        <button type="submit" onClick={this.submitNewStudentInfo}>Submit</button>
      </form>
    )
  }
}

export default AddStudentForm;