const {Todos}=require("./models")


//Reading a todo
const getAllTodos= async(request,response)=>{
    var _id=request.query.id;
    var dtaa=request.query.taskName;
    if(_id){
        var todos=await Todos.findById(_id);
    }
    else if(dtaa){
        var todos=await Todos.find({taskName:dtaa});
    }
    else{
        var todos=await Todos.find();
    }
    return response.json(todos);
}

//Creating a todo and even showing it 
const addTodo= async (request,response)=>{
    console.log(request.body)
    var newStudent=await Todos.create(request.body)
    return response.json({status:"Added this task",data:newStudent})
}

// Deleting a todo
const deleteTodo=async (request,response)=>{
    var _id=request.query.id;
    var StudentDel=await Todos.findByIdAndDelete(_id);
    return response.json({status:"Task Deleted",data:StudentDel})
}

// Updating a todo
const updateTodo=async(request,response)=>{
    var _id=request.query.id;
    var newData=request.body
    var UpdatedStd=await Todos.findByIdAndUpdate(_id,newData);
    return response.json({status:"Todo Updated",data:UpdatedStd})
}

// Toggling the isCompleted boolean
 // toggling the task and saving it again
const toggleTask=async(request,response)=>{
    var _id=request.query.id;
    var oneStudent=await Todos.findById(_id);
    var oldIsComplete=oneStudent.isCompleted;
   console.log(oldIsComplete);
   if(oldIsComplete===true)oneStudent.isCompleted=false;
   else{oneStudent.isCompleted=true;}
    oneStudent=await oneStudent.save();
    return response.json({status:"Todo Toggled",data:oneStudent})
}


module.exports={getAllTodos,addTodo,deleteTodo,updateTodo,toggleTask}