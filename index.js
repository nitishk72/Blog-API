const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sass = require('node-sass-middleware');

const port = 3000;

app.use(sass({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public')
  }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const homeController = require('./controllers/home');

app.get('/', homeController.index);

app.listen(port, function(){
    console.log('Server is Running on PORT Number : '+port);
  });