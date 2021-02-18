const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./model/user');


mongoose.connect('mongodb://localhost:27017/AuthDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


app.set('view engine', 'ejs')
app.set('views', 'views');
app.use(express.urlencoded({extended:true}))
app.use(session({secret:'notasecret'}))

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}


app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/register', (req, res)=>{
    res.render('register')
})

app.post('/register', async(req, res)=>{
    const {username, password} = req.body;
    const hashedPw =await bcrypt.hash(password,12);
    const newUser = new User({
        username,
        password:hashedPw
    })
    await newUser.save();
    req.session.user_id = newUser._id;
    res.redirect('/secret')
})

app.get('/secret',requireLogin,(req, res)=>{
    res.render('secret') 
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    const foundUser =await User.findOne({username});
    const validPassword = await bcrypt.compare(password, foundUser.password);
    if(validPassword){
        req.session.user_id = foundUser._id;
        res.redirect('/secret')
    }else{
        res.redirect('/login')
    }
})



app.post('/logout', (req, res)=>{
    req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login')
})

app.listen('3001', ()=>{
    console.log('serving on port 3001')
})