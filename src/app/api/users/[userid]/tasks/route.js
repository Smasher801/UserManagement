import { Task } from "@/models/task";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { getErrorNextResponse } from "@/helper/errorMessage";

export async function GET(request, { params }) {
  const { userid } = params;

  try {
    const getUser = await User.findById(userid);

    const tasks = await Task.find({
      userId: userid,
    });
   
    // this below is giving us both the task as well as the user
   //  NextResponse.json([getUser, tasks])

    return NextResponse.json( tasks);
  } catch (error) {
    return getErrorNextResponse("error in getting all tasks", 404, false);
  }
}
