import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "../../../models/user";
import bcrypt from "bcryptjs";

connectDb();

export async function GET() {
  let users = [];
  users = await User.find().select("-password");
  // console.log(userData);
  // console.log(users);

  // const users = [
  //   {
  //     name: "Durgesh",
  //     phone: "23245",
  //     course: "java",
  //   },
  //   {
  //     name: "Thapa",
  //     phone: "23245",
  //     course: "cpp",
  //   },
  //   {
  //     name: "Deva",
  //     phone: "23245",
  //     course: "nextjs",
  //   },
  // ];

  // const users = new User({
  //     name : "Harsh",
  //     email : "harsh@gmail.com",
  //     password : "123",
  //     about : "Hello this side harsh",
  //     profileUrl : "thisbxhjsdcjsb"
  // })
  // const users = [];

  return NextResponse.json(users);
}

export async function POST(request) {
  // const body = request.body;
  // this request.body is not giving us the raw data that we are passing
  //   console.log(request.cookies);
  /* 
   https://developer.mozilla.org/en-US/docs/Web/API/Request
   if we are passing the json data then
   const data = await request.json()
   console.log(data );  
   */

  /* 
   const textData = await request.text();  
  console.log(textData);
   */
  const { name, email, password, about, profileUrl } = await request.json();

  //  console.log(usersData);
  try {
    const usersData = new User({
      name,
      email,
      password,
      about,
      profileUrl,
    });
    usersData.password = bcrypt.hashSync(
      usersData.password,
      parseInt(process.env.BCRYPY_PWD)
    );
    console.log(usersData.password);
    await usersData.save();

    const response = NextResponse.json(usersData, {
      status: 201,
    });
    return response;
  } catch (error) {
    //  console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create user",
        status: false,
      },
      {
        status: 500,
        statusText: "Cant create duplicate email",
      }
    );
  }
}

export function DELETE(request) {
  return NextResponse.json(
    {
      error: "this is error",
      message: "Hello",
      status: 404,
    },
    {
      status: 201,
      statusText: "this is status 201",
    }
  );
}

export function PUT() {}
