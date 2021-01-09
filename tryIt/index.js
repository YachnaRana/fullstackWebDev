const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/",(req,res)=>{
    res.render("first")
});
app.use(express.static("public"))
app.get("/random", (req, res)=>{
    const random = [1,2,3,4,5,6,7,89,13,22,35,47,56,89];
    res.render("random", {random})
});
app.get("/data/:subreddit", (req, res)=>{
    const { subreddit } = req.params; 
    const data = redditData[subreddit];
    if(data){
        res.render("post", {...data})
    }else{
        res.render("notfound", {subreddit})
    }
    
});

app.get("/y/:myself", (req, res)=>{
    const {myself} = req.params;
    res.render("myself",{myself}) 
})
app.get("/r/:first/:last", function(req, res){
    const {first, last} = req.params
    const {q} = req.query;
    // res.send(`<h1>my first name is ${first} and last name is ${last}</h1>`)
    res.send(`<h1>my query is: ${q}</h1>`)
});
app.use(()=>{
    console.log("someone has checked your profile")
});

app.listen("3000", ()=>{
    console.log("listening on port 3000")
});


