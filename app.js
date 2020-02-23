const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
//cons users=require('./routes/users');
const app=express();
app.use(express.json());
 


//Middlewares
app.use(morgan('dev'));// shows the request in the terminal


//Routes
app.use('/users',require('./routes/users'));


//Start Server
const port=process.env.port ||3000;
app.listen(port);
console.log('start server at: '+port);




