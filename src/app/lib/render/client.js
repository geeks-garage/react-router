import ReactDOM from 'react-dom';
import React from 'react';
import App from '../../../App';
import registerServiceWorker from '../../../registerServiceWorker';
import { BrowserRouter as Router, browserHistory, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Topics from '../../pages/Topics';

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
  ,
  document.getElementById('content'),
);

registerServiceWorker();
