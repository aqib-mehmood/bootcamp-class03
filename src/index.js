import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MediaCard from './MediaCard';
import Gate from './Gate';
import Room from './Room';

ReactDOM.render(
  <div>
    <App name="aqib"/>
    <MediaCard title="Web Seminar" body="Web Developement Seminar by React" image_url='./logo192.png'/>
    <Gate isOpen={true}/>
    <br/><br/>
    <Room></Room>
  </div>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
