import React from 'react';
import './style.css';

export default function App() {
  let timeNow = new Date();
  let greetings = '';
  const changeColor = { color: '' };

  const output = timeNow.getHours();
  const minute = timeNow.getMinutes();
  if (output > 18) {
    changeColor.color = 'green';
    greetings = 'Good Evening';
  } else if (output < 12) {
    changeColor.color = 'yellow';
    greetings = 'Good Morning';
  } else {
    changeColor.color = 'red';
    greetings = 'Good Afternoon';
  }

  return (
    <div className="container">
      <h2>Hello</h2>
      <h3 style={changeColor}>{greetings}</h3>
      <h3 id="changeColor">
        The time now is {output}: {minute} hour!
      </h3>
    </div>
  );
}
