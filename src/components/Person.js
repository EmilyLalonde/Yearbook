import React from 'react';
import './Person.css';

const Person = ({name, quote, superlative, photo}) => {
  console.log('person', name)
  return (
    <div>
      <section className="teachers">
      <img src={photo} alt="staff-photos"/>
      <h3>{name}</h3>
      <p>{quote}</p>
      <h4>{superlative}</h4>
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
