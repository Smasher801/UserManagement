import mongoose , {Schema} from "mongoose";


const userSchema = new Schema({
    
    name : String,
    email : {
         type : String,
         unique : true,
         required : [true , "Email Required!!"]
    },
    password : {
        type : String,
        require : [true , "Password Required!!"],
        // can also apply validator
    },
    about : String,
    profileURL  : String,
    // address : {
    //     street : String,
    //     city : String,
    //     country : String,
    //     pinCode : Number
    // }

})

export const User = mongoose.models.users || mongoose.model("users",userSchema);

