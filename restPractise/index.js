const express = require("express");
const { join } = require("path");
const app = express();
const path = require("path");
const {v4:uuid} = require("uuid");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));



let tweets = [
    {
        id:uuid(),
        name: "yachna",
        tweet: "pink is my fav color"
    },
    {
        id:uuid(),
        name: "rishi",
        tweet: "blue is my fav color"
    },{
        id:uuid(),
        name: "niyu",
        tweet: "purple is my fav color"
    },{
        id:uuid(),
        name: "ruchi",
        tweet: "yellow is my fav color"
    },{
        id:uuid(),
        name: "rinku",
        tweet: "red is my fav color"
    },{
        id:uuid(),
        name: "yach",
        tweet: "green is my fav color"
    }
]
app.get("/", (req, res)=>{
    res.send("hello there")
})
app.get("/tweets", (req, res)=>{
    res.render("tweets/landing",{tweets})
})
app.get("/tweets/new", (req, res)=>{
    res.render("tweets/new")
})
app.post("/tweets", (req, res)=>{
    const {name, tweet} = req.body;
    tweets.push({name, tweet, id:uuid()});
    res.redirect("/tweets")
})
app.get("/tweets/:id", (req, res)=>{
    const {id} = req.params;
    const tweet = tweets.find(c => c.id === id);
    res.render("tweets/show", {tweet})
})
app.get("/tweets/:id/edit", (req, res)=>{
    const {id} = req.params;
    const tweet = tweets.find(c => c.id === id);
    res.render("tweets/edit", {tweet})
})
app.patch("/tweets/:id", (req, res)=>{
    const {id} = req.params;
    const newTweet = req.body.tweet;
    const foundTweet = tweets.find(c => c.id === id);
    foundTweet.tweet = newtweet;
    res.redirect("/tweets");
})
app.use(()=>{
    console.log("someone watched ur profile")
})
app.listen(3000, ()=>{
    console.log("connecting to page")
})