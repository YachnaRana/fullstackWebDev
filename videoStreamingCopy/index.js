const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const { exec }  = require('child_process');

app.use(express.urlencoded({extended:true}))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static("public"));

const videoArray = [
    {title: "video1", 
    url:"http://techslides.com/demos/sample-videos/small.mp4", 
    thumbnail: "https://pbs.twimg.com/profile_images/642353845251649536/7B1DCyYF_400x400.jpg",
    details: ['dvcbnmj','dsfgh','scfvbgn']},
    {title: "video2", 
    url:"http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4", 
    thumbnail: "https://pbs.twimg.com/profile_images/642353845251649536/7B1DCyYF_400x400.jpg",
    details: ['dvcbnmj','dsfgh','scfvbgn']},
    {title: "video3", 
    url:"http://techslides.com/demos/sample-videos/small.mp4", 
    thumbnail: "https://pbs.twimg.com/profile_images/642353845251649536/7B1DCyYF_400x400.jpg",
    details: ['dvcbnmj','dsfgh','scfvbgn']},
    {title: "video4",
    url:"http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4", 
    thumbnail: "https://pbs.twimg.com/profile_images/642353845251649536/7B1DCyYF_400x400.jpg",
    details: ['dvcbnmj','dsfgh','scfvbgn']},
    {title: "video5", 
    url:"https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4", 
    thumbnail: "https://pbs.twimg.com/profile_images/642353845251649536/7B1DCyYF_400x400.jpg",
    details: ['dvcbnmj','dsfgh','scfvbgn']},
    {title: "video6", 
    url:"http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4", 
    thumbnail: "https://pbs.twimg.com/profile_images/642353845251649536/7B1DCyYF_400x400.jpg",
    details: ['dvcbnmj','dsfgh','scfvbgn']}
]
 
app.get('/', function(req, res) {
    res.send('welcome to my channel')
})

app.get("/list", (req, res)=>{
    res.render("videoList", {videoArray})
})
 
app.get('/video', function(req, res) {
    const path = `${this.url}`
    const stat = fs.statSync(path)
    const fileSize = stat.size
    const range = req.headers.range
    
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-")
        const start = parseInt(parts[0], 10)
        const end = parts[1]
        ? parseInt(parts[1], 10)
        : fileSize-1
        
        const chunksize = (end-start)+1
        const file = fs.createReadStream(path, {start, end})
        const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
        } 
        res.writeHead(206, head)
        file.pipe(res)
        res.render("show")
    } else {
        const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head)
        fs.createReadStream(path).pipe(res)
    }  

})
 
app.listen(3000, function () {
console.log('App is running on port 3000')
})
 