const { query } = require('express');
const express = require('express');
const router = express.Router();
router.use((req, res, next)=>{
    if(req.query.isAdmin){
        next();
    }else{
        res.send('you need password to log in')
    }
})
router.get('/topsecret', (req, res)=>{
    res.send('this is my top secret')
})
router.get('/delete', (req, res)=>{
    res.send('deleted everything!!!!')
})
module.exports = router;