import { User } from "@/models/user";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);
  // this below we are extracting the payload that we sent while creating token when the particular user is logged in
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  console.log(data);
  const user = await User.findById(data._id).select("-password");
  return NextResponse.json(user);
}
