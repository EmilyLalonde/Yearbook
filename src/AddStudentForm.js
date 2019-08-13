import React, { Component } from 'react';

class AddStudentForm extends Component {
  constructor() {
    super() 
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      photo: ''
    }
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="name"></input>
        <input type="text" placeholder="quote"></input>
        <input type="text" placeholder="superlative"></input>
        <input type="text" placeholder="photo"></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AddStudentForm;