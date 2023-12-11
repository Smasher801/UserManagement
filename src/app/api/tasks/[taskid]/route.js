import { NextResponse } from "next/server";
import { getErrorNextResponse } from "@/helper/errorMessage";
import { Task } from "@/models/task";

export async function GET(request, { params }) {
  const { taskid } = params;

  try {
    const task = await Task.findById(taskid);
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return getErrorNextResponse("error in getting task", 404, false);
  }
}

export async function POST() {}

export async function DELETE(request, { params }) {

    const { taskid } = params;
    try{
       
     const deleted =   await Task.deleteOne({
            _id : taskid
        })
      //  console.log(deleted);
        return NextResponse.json({
            message : "deletion done",
            success : true
        });

    }catch(error){
        return getErrorNextResponse("error in getting task", 404, false);
    }

}

export async function PUT(request, { params }) {
  const { taskid } = params;
  const { title, content, status } = await request.json();
  try {
    const task = await Task.findById(taskid);
    task.title = title;
    task.content = content;
    task.status = status;

    const uppdatedTask = await task.save();

    return NextResponse.json(uppdatedTask);
  } catch (error) {
    return getErrorNextResponse("error occured", 404, false);
  }
}
