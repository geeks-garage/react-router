import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './app/pages/Home';
import About from './app/pages/About';
import Topics from './app/pages/Topics';

const App = () => (
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
);

export default App;
