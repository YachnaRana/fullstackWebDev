// const bodyParser = require("body-parser");
const express = require("express");
const app  = express();
const path = require("path");
const {v4: uuid} = require("uuid");
const methodOverride = require("method-override");


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
let comments = [
    {
        id:uuid(),
        name: "yachna",
        comment: "pink is my fav color"
    },
    {
        id:uuid(),
        name: "rishi",
        comment: "blue is my fav color"
    },{
        id:uuid(),
        name: "niyu",
        comment: "purple is my fav color"
    },{
        id:uuid(),
        name: "ruchi",
        comment: "yellow is my fav color"
    },{
        id:uuid(),
        name: "rinku",
        comment: "red is my fav color"
    },{
        id:uuid(),
        name: "yach",
        comment: "green is my fav color"
    }
]
app.get("/comments", (req, res)=>{
    res.render("comments/first", {comments});
})
app.get("/comments/new", (req, res)=>{
    res.render("comments/newComment");
});
app.post("/comments", (req, res)=>{
    const {name, comment}  = req.body;
    comments.push({name,comment, id:uuid()});
    res.redirect("/comments");
});
app.get("/comments/:id", (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", {comment})
});
app.get("/comments/:id/edit", (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", {comment});
});
app.patch("/comments/:id", (req, res)=>{
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect("/comments");
});
app.delete("/comments/:id", (req, res)=>{
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments")
})

app.use(()=>{
    console.log("someone has visited ur app")
})
app.listen(3000, (req, res)=>{
    console.log("server is runnig")
})