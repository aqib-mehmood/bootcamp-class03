import React from 'react';
import logo from './logo.svg';
import './App.css';

/* *This is also the way to call the properties.
function App({name,age}) {
return <h1>
        Hello World using AppJs by {name} Age = {age}
      </h1>
}*/

function App(props) {
  return <div>
          Hello World using AppJs by {props.name} Age = {props.age}
          <div>This is a child div</div>
        </div>
  }

export default App;
