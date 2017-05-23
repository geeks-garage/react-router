import express from 'express';
import App from './App';

const app = express();

app.get('*', (req, res, next) => {
  return res.render('app/pages/');
});
