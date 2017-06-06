import ReactDOM from 'react-dom';
import React from 'react';
import App from '../../../App';
import registerServiceWorker from '../../../registerServiceWorker';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import routes from '../../routes';

console.log("javascript loaded....", document.getElementById('content'));
ReactDOM.render(
  <Router history={browserHistory}>
    {routes}
  </Router>
  ,
  document.getElementById('content'),
);

registerServiceWorker();
