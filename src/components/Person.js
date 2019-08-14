import React from 'react';
import './Person.css';

const Person = ({photo, name, quote, superlative, id, deleteCard}) => {
  return (
      <section className="people">
      <img src={photo} alt="yearbook-photos"/>
      <h3>{name}</h3>
      <p>{quote}</p>
      <h4>{superlative}</h4>
      <button type="submit">Update Info</button>
      <button onClick={() => deleteCard(id)}>Delete</button>
      </section>
  )
}

export default Person;
