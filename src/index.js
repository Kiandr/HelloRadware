import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import App from './App';
import Radware from './Radware';
import './bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Radware />, document.getElementById('root'));

function showAlert(onSuccess, onFail) {
    // Get the current 'global' time from an API using Promise
    return new Promise((resolve, reject) => {setTimeout(()=> {resolve('show');}, 100);
    })
  }
  showAlert()
    .then(currentTime => showAlert())
    .then(currentTime => {
        if(currentTime ==='show')
      console.log('The current time is: ' + currentTime + new Date());
      var t = new Radware(currentTime);

      
      return true;
    })
    .catch(err => console.log('There was an error:' + err))
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
