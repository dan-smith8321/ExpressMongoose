var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').then(()=>{
    console.log('Connected to db');
})
.catch(err=>{
    console.log('Not Connected to db')
})

var app = express();
app.get('/', (req, res )=>{
    res.send('this is the homepage')
});

var app = express();
app.get('/', (req, res )=>{
    res.send('about me')
});

//listening for requests on port 3000
app.listen(3000, ()=>{
    console.log('server listening on port 3000');
});