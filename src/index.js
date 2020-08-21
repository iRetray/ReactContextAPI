import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//IMPORTANTE
//Link base para estudiar contextAPI
//https://codesandbox.io/s/todoconcontext-ie87f?file=/src/context/TodoContext.js&fbclid=IwAR1gK0waALUijUY-0f58bZ59tJJ1Bdq7wZmhFsITPeCs-sLOnlNvoH54Wx4

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
