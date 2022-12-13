const express=require("express");
const server=express()
const cors=require("cors");
const parser=require("body-parser")
const {getAllTodos,addTodo,deleteTodo,updateTodo,toggleTask}=require("./src/controllers")
const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/TODO")
mongoose.connection.on("connected",()=>{
    console.log("DB connected")
})


// for interconnection purpose

server.use(cors());
server.use(parser.json())

server.get("/getTodos",getAllTodos)
server.post("/addTodo",addTodo)
server.delete("/deleteTodo",deleteTodo)
server.get("/updateTodo",updateTodo)
server.get("/toggleTodo",toggleTask)

server.listen(4000,()=>{
    console.log("Your server of TODO MANAGER  started at port 4000")
})