
const express = require('express');
const port = 3000;
const ejs = require('ejs');
const bodyParser = require('body-Parser');
app = express();
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017', (err)=>{
    if(!err)console.log('db connected');
    else console.log('CAN NOT CONNECT TO DB');
})


app.use('/', (req, res)=>{
    res.send('we are live')
})

app.listen(port, ()=>console.log(`Port ${port} activated: || http://127.0.0.1:${port}/`))