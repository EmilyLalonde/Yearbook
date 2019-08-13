import React from 'react';
import './Person.css';

const Person = ({name, quote, superlative, photo}) => {
  return (
    <div>
      <section className="people">
      <img src={photo} alt="staff-photos"/>
      <h3>{name}</h3>
      <p>{quote}</p>
      <h4>{superlative}</h4>
      </section>
    </div>
  )
}

export default Person;
