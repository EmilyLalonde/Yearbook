import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  console.log(props)
  
const staff = props.instructors.map((person) => {
          return <Person key={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={person.photo}/>
        })

 const students = props.students.map((person) => {
          console.log(person)
          return <Person key={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={person.photo}/>
        })
  return (
    <div>
    <section className="staffList">{staff}</section>
    <section className="studentList">{students}</section>
    </div>
  )
}

export default Cohort;