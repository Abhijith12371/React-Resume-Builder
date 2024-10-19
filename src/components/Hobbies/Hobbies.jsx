import React from 'react';
import './Hobbies.css';

const Hobbies = (props) => {
  return (
    <div className='Hobbies aqua-shade'>
      <h3>Hobbies and Interests</h3>
      <ul>
        {props.data.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
