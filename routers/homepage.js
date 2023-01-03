const express = require('express');
const Router = express.Router();

Router.use('/', (req,res)=>{
    res.render('index')
})


module.exports = Router;