const express = require('express');
const compression = require('compression');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const sass = require('node-sass-middleware');

const port = 3000;

app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const homeController = require('./controllers/home');

app.get('/', homeController.index);

app.listen(port, function(){
    console.log('Server is Running on PORT Number : '+port);
  });