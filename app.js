const express = require('express');
const app = express();
const db = require("./db");
const port = 5544;
app.use(express.static(__dirname+'/public'));

app.get("/api", (req,res)=>{
    let page = req.query.page || 1;
    let limit = req.query.limit || 100;
    res.send(db.getAll(limit, page))
})

app.get("/api/filter/",(req,res)=>{
    let attrib = req.query.attribute;
    let value= req.query.value;
    res.send(db.getByAttribute(attrib, value))
})

app.get("/api/:id", (req,res)=>{
    res.send(db.getById(req.params.id))
})

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`)
})