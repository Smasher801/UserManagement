import { NextResponse } from "next/server";
import { Task } from "@/models/task";
import {getErrorNextResponse} from '../../../helper/errorMessage'
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

// get all the tasks
connectDb();
export async function GET(request){

     const tasks = await Task.find();

     return NextResponse.json(tasks);

}

// create all the tasks
export async function POST(request){
     const {title,content,userId,status} = await request.json();

     try{

          const authToken = request.cookies.get("authToken")?.value;
          // console.log(authToken);
          // this below we are extracting the payload that we sent while creating token when the particular user is logged in
          const data = jwt.verify(authToken, process.env.JWT_KEY);
          // console.log(data);

        const task = new Task({
             title,
             content,
             userId : data._id,
             status
        });

       const createdTask = await task.save();

       return NextResponse.json(createdTask);

     }catch(error){
        console.log(error);
        return getErrorNextResponse("error in getting data", 404,false)
     }
}