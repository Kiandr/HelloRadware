import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import App from './App';
import Radware from './Radware';
import './bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Radware />, document.getElementById('Kian'));

function showAlert(onSuccess, onFail) {
    // Get the current 'global' time from an API using Promise
    return new Promise((resolve, reject) => {setTimeout(()=> {resolve('show');}, 10000);
    })
  }
  showAlert()
    .then(currentTime => showAlert())
    .then(currentTime => {
    if(currentTime ==='show'){
      ReactDOM.render(<Radware />, document.getElementById('Kian'));
      //var r = new Radware();  
      console.log("Opening");
//      r.openModal();
    }
      return true;
    })
    .catch(err => console.log('There was an error:' + err))
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
