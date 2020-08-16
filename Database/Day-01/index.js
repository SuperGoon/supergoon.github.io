const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

let db;

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        return console.log(err)
    }
    db = client.db("MyDatabase")
    console.log("Đã kết nối tới database")
})

var fs = require('fs')

const { url } = require('inspector')

let blog01 = [{
        title: "10 bước lột xác để trở thành người chiến thắng",
        img: "https://techmaster.vn/media/static/10194/bsg0hdc51cob9t3q7nqg",
        content: "Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        date: '26-07-2020'
    },
    {
        title: "Kinh nghiệm code",
        img: "https://techmaster.vn/media/static/10194/bsg0hdc51cob9t3q7nqg",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... ",
        date: '26-07-2020'
    },
    {
        title: "Ước gì tôi biết những điều này sớm hơn",
        img: "https://techmaster.vn/media/static/10194/bsij2ss51cob9t3q7od0",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: '26-07-2020'
    },
    {
        title: "Ước gì tôi biết những điều này sớm hơn",
        img: "https://techmaster.vn/media/static/10194/bsij2ss51cob9t3q7od0",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        date: '26-07-2020'
    },

]

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", 'ejs')

app.get("/", function(req, res) {
    res.render("    ")
})

app.get('/blog__01', function(req, res) { //res lưu thông tin cilient gửi lên, res là tt trả về 
    // res.render('index.ejs', { result: blog01 })
    let todoList = db.collection("newtodo").find().toArray().then(result => {
        console.log(result)
    }).catch(error => {
        console.error(error)
    })
})

app.post("/blog__02", function(req, res) {
    // let newContent = req.body;
    // console.log(newContent);
    // blog01.push(newContent);
    db.collection('newtodo').insertOne(req.body).then(result => {
        console.log(result)
    }).catch(error => {
        console.error(error)
    })
})

app.listen(3000, function() {
    console.log('Hello on port 3000')
})