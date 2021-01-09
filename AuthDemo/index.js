const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');


mongoose.connect('mongodb://localhost:27017/Authdemo', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("mongo connection open...")
})
.catch(err =>{
    console.log("mongo err")
})


app.set('view engine', 'ejs');
app.set('views', 'views');

//to parse the form data 
app.use(express.urlencoded({extended:true}));
app.use(session({secret:'notagoodpassword'}));

const requireLogin = (req, res,next)=>{
    if(!req.session.user_id){
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
    const {password, username} = req.body;
    const user =await new User({username,password});
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req, res)=>{
    res.render('login')
})
app.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    // const user = await User.findOne({username});
    // const validPassword = await bcrypt.compare(password, user.password);
    const foundUser = await User.findAndValidate(username,password);
    if(foundUser){
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

app.get('/secret',requireLogin, (req, res)=>{
    res.render('secret')
})

app.listen(3000, ()=>{
    console.log('serving on port 3000!!')
})

