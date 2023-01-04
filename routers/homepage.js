const express = require('express');
const Router = express.Router();

Router.use('/', (req,res)=>{
    res.render('index')
})

Router.post('/add', (req, res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //console.log('')

    const member = new member({
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