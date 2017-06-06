import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Topics from '../pages/Topics';

export default (
  <div>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} />
  </div>
);
