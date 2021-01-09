const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("connection open...")
})
.catch(err =>{   
    console.log("err")
})

const movieSchema = new mongoose.Schema({
    title: String,
    year:Number,
    score:Number,
    rating:String
})

const Movie = mongoose.model('Movie', movieSchema);

const tmkoc = new Movie({title:"tarak mehta ka ooltah chashma", year: 2008, score: 9.8, rating: "G"})

Movie.insertMany([
    {title:"pyar ka panchnama", year: 2014, score: 9.2, rating: "R"},
    {title:"dhamal", year: 2012, score: 9.5, rating: "P"},
    {title:"malamal weekly", year: 2009, score: 9.2, rating: "Q"},
    {title:"hungama", year: 2011, score: 8.2, rating: "R"},
    {title:"terminator", year: 2010, score: 4.2, rating: "S"},
    {title:"coolie", year: 2021, score: 8.8, rating: "Q"},
    {title:"ludo", year: 2020, score: 9.9, rating: "T"}
])
.then((data)=>{
    console.log("it worked")
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

 

