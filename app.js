const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 9001;
require('dotenv').load();


/* --------- Cargando rutas ----------*/
const routes = require('./routes/rutas');

app.set('view engine', 'pug');

//app.use(morgan('dev'));


// Body Parser middleware
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

// Method override middleware
app.use(methodOverride('_method'));



// Global variables
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/* ---- Uso de rutas ---- */

app.use('/', routes);




app.listen(PORT, ()=> {
//app.listen(process.env.ALWAYSDATA_HTTPD_PORT, process.env.ALWAYSDATA_HTTPD_IP, function () {
  console.log(`Sever escuchando en el puerto ${PORT}`);
});

