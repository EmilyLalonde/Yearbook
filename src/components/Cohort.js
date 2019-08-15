import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
const staff = props.instructors.map((instructor) => {
          return <Person key={instructor.id} photo={instructor.photo} name={instructor.name} quote={instructor.quote} superlative={instructor.superlative} id={instructor.id} deleteCard={props.deleteCard}/>
        })

 const students = props.students.map((student) => {
          return <Person key={student.name + Date.now()} photo={student.photo} name={student.name} quote={student.quote} superlative={student.superlative} id={student.id} deleteCard={props.deleteCard}/>
        })
  return (
    <div>
      <article className="staff-info">
    <h2 className="staff-header">Staff</h2>
    <section className="staff-list">{staff}</section>
    </article>
    <article className="student-info">
    <h2 className="student-header">Students</h2>
    <section className="student-list">{students}</section>
    </article>
    </div>  
  )
}

export default Cohort;