const express = require('express');
const app = express();
const shelter = require('./routes/shelter');
const dogs = require('./routes/dogs');
const admin = require('./routes/admin');

app.use('/admin', admin);
app.use('/shelters', shelter);
app.use('/shelters/dogs', dogs);
app.listen(3000, ()=>{
    console.log('running on 3000')
});