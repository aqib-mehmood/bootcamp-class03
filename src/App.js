import React from 'react';
import './App.css';

/* *This is also the way to call the properties.
function App({name,age}) {
return <h1>
        Hello World using AppJs by {name} Age = {age}
      </h1>
}*/

function App(props) {
  return <div>
          Hello World by <strong> {props.name} </strong>
          <div>
            <h2>Ordered List</h2>
            <ol>
              <li>One</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
            </ol>
            <h2>Unordered List</h2>
            <ul>
              <li>One</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
            </ul>
          </div>
          
          <p>Here we have a mathematical expression = 2 + 5 = {2+5}</p>
          

        </div>
  }

export default App;
