// here we are going to connect our project with the database 
// with the help of mongoose we can make database connection
// database ke saath khelne ke liye we will use mongoose (like operation perform)
// we need to create models for the data

import mongoose from "mongoose";
import { User } from "../models/user";

export const connectDb = async() => {
    
    try{

     const {connection} =   await mongoose.connect( process.env.MONGO_DB_URL ,{
                  dbName : "work_manager"  
        })

        console.log("db connceted");
    // testing and creating a new user 
    //    const uuser = new User({
    //     name : "test name",
    //     email : "test@gmail.com",
    //     password : "testPassword",
    //     about : "this is testing"
    //    });

    //    await uuser.save();
     
    //    console.log("user is saved");

        // console.log(connection);

    }
    catch(error){
        console.log("fail to connect to the DB");

    }

}