import React from 'react';
import './Person.css';

const Person = ({photo, name, quote, superlative, id, deleteCard}) => {
  return (
      <section className="people">
      <img src={photo} alt="yearbook-photos"/>
      <h3 contentEditable={true} suppressContentEditableWarning={true}>{name}</h3>
      <p contentEditable={true} suppressContentEditableWarning={true}>{quote}</p>
      <h4 contentEditable={true} suppressContentEditableWarning={true}>{superlative}</h4>
      <button onClick={() => deleteCard(id)}>Delete</button>
      </section>
  )
}

export default Person;
