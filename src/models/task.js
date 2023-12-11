import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
     title : {
        type : String,
        required : true,     
     },
     content : {
        type : String,
        requied : true
     },
     addedDate :{
        type : Date,
        required : true,
        default : Date.now(),
     },
     status : {
         type : String , 
         // enum means inme seee hi koi value hogi
         enum : ["pending","completed","none"],
         default : "none"
     },
     userId : {
        type : mongoose.ObjectId,
        required : true
     }
})

export const Task = mongoose.models.tasks || mongoose.model("tasks",TaskSchema);