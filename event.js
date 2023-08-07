// event programs


const eventEmitter = require("node:events");
const event = new eventEmitter();

event.on("order-pizza",(size, toping)=>{
    console.log(`Ordering the pizza of ${size} and ${toping} as toping`);
})


event.on("order-pizza", (size)=>{
    if(size === "larger"){
        console.log("Serving the complimentary drink...");
    }
})
console.log("Do the work....");
event.emit("order-pizza","larger","mozerilla")

const fs = require ('fs')
fs.readFile('modules.js','utf-8',(err, data)=>{
    console.log(data);
})


const express = require('express')

const app = express();

const loged = function(req, res ,next){
    req.send("hello world...")
    next();
}

app.use('/',loged);

app.listen(3000,()=>{
    console.log("server running....");
})


const logr = function(req, res, next){
    const id = req.query.id
    res.send("hello"+id)
    next()
}
app.use('/',logr)

const loger = function(req, res, next){
    const id = req.params.id;
    res.send("hello"+id)
    next()
}

app.use('/:id',loger)