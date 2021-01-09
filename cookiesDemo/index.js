const express = require('express');
const app = express();
const session = require('express-session');
const sessionOptions = {secret:'thisisnotagoodsecret',resave:false,saveUninitialized:false}
app.use(session(sessionOptions))

app.get('/viewcount',(req, res)=>{
    if(req.session.count){
        req.session.count+=1;
    }else{
        req.session.count=1
    }
    res.send(`you have viewed this page ${req.session.count} times`)
})
app.get('/register',(req, res)=>{
    const {username='yachu'} = req.query;
    req.session.username = username;
    res.redirect('/greet')
})
app.get('/greet',(req, res)=>{
    const {username} = req.session;
    res.send(`hey there, ${username}`);
})
app.listen(3000, ()=>{
    console.log('serving on port 3000')
})


















// const express = require('express');
// const app = express();
// const cookieParser = require('cookie-parser');
// app.use(cookieParser('thisismysecret'));
// app.get('/greet', (req, res)=>{
//     const {name, color} = req.cookies;
//     res.send(`hey there, ${name}. i know your fav color is ${color}`);
// })

// app.get('/setname',(req, res)=>{
//     res.cookie('name', 'yachna');
//     res.cookie('color','pink');
//     res.send('sent you cookies already')
// })
// app.get('/getsignedcookie', (req, res)=>{
//     res.cookie('fruit', 'apple', {signed: true});
//     res.send('signed the cookie')
// })
// app.get('/verifyfruit',(req, res)=>{
//     res.send(req.signedCookies)
// })
// app.listen(3000, ()=>{
//     console.log('serving on port 3000')
// })