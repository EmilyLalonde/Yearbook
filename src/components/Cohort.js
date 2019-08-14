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
    <section className="staffList">{staff}</section>
    <section className="studentList">{students}</section>
    </div>  
  )
}

export default Cohort;