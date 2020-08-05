import React from 'react';
import './App.css';
import './custom.css';

/* *This is also the way to call the properties.
function App({name,age}) {
return <h1>
        Hello World using AppJs by {name} Age = {age}
      </h1>
}*/


/* Plain Function */

function App(props) {
  return <div className="myclass">
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

/*using constant holding anonymous fucntion.*/
/*
const App = function (props) {
  return <div>using a constant holding anonymous function.</div>
}*/




/* Now instead of using function keyword use arrow(=>) keyword. */
/*
const App = (props) => {
  return <div>hello {props.name}; using constant holding an arrow function anonymous fucntion.</div>
}
*/


/*Now skip return keyword and just use round braces instaed of curly braces */
/*
const App = (props) => (
  <div>Hi.. without using return keyword function.</div>
)*/


/*Now if a function is small u can write it in one line as well */

/*
const App = (props) => <div>Bye..! using single line function.</div>
*/

export default App;