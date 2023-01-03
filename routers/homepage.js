const express = require('express');
const Router = express.Router();

Router.use('/', (req,res)=>{
    res.render('index')
})

Router.post('/add', (req, res)=>{
    
} )

module.exports = Router;