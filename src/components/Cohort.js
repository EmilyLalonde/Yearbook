import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = (props) => {
  console.log(props)
  return (
    <div>
    <section className="top"> 
      {
        props.instructors.map((instructor) => {
          return <Person key={instructor.id} instructor={instructor}/>
        })
      }
    </section>
    {/* <section className="bottom">
      {
        props.students.map((student) => {
          console.log(student)
          return <Person key={student.id} student={student}/>
        })
      }
    </section> */}
    </div>
  )
}

export default Cohort;