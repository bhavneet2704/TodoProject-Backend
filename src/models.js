const mongoose=require("mongoose")
// const {Boolean}=require("webidl-conversions");

const todoSchema=new mongoose.Schema({
    taskName:String,
    description:String,
    isCompleted:Boolean
})

const Todos=mongoose.model("Todos",todoSchema)
module.exports={Todos}