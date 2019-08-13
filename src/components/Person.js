import React from 'react';
import './Person.css';

const Person = ({instructor, student}) => {
  // console.log('instructor', instructor)
  // console.log('student',student)
  return (
    <div>
      <section className="teachers">
      {/* <img>{instructor.photo}</img> */}
      <h3>{instructor.name}</h3>
      <p>{instructor.quote}</p>
      <h4>{instructor.superlative}</h4>
      </section>
      {/* <section className="students">
        <h3>{student.name}</h3>
        <p>{student.quote}</p>
      <h4>{student.superlative}</h4>
      </section> */}
    </div>
  )
}

export default Person;
