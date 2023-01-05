const express = require('express');
const Router = express.Router();
const Member = require('../models/member')

Router.get('/', (err, res)=>{
    res.render('index')
})

Router.post('/add', (req, res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //console.log('')

    const member = new Member({
        name,
        email,
        username,
        password
    })

    member.save(err=>{
        if(err){
            console.log('error saving data')
        } else{
            res.redirect('/')
        }
    })
} )

module.exports = Router;