
const express = require('express');
const port = process.env.port || 3000;
const ejs = require('ejs');
const bodyParser = require('body-Parser');
app = express();
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
//const bodyParser = require('body-parser');


//data base connection
/*
mongoose.connect('mongodb://127.0.0.1:27017/member', {useNewUrlParser:true}, (err)=>{
    if(!err)console.log('db connected');
    else console.log('CAN NOT CONNECT TO DB');
})
*/

mongoose.connect('mongodb://127.0.0.1:27017/member', {useNewUrlParser:true})
const db = mongoose.connection;
db.on('err', ()=>{
    console.log('error in connection')
})
db.once('open',()=>{
    console.log('connected')
})

// set ejs views
app.set('view engine', 'ejs');

//public folder for external resources
app.use(express.static('public'));

//body parser 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const homepageRoutes = require('./routers/homepage')

//roroute and views for testing
app.use('/', homepageRoutes)


// server/
app.listen(port, ()=>console.log(`Port ${port} activated: || http://127.0.0.1:${port}/`))