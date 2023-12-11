import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

connectDb();

export async function POST(request) {
  const { email, password } = await request.json();
  // 1 )  get the user
  try {
    const user = await User.findOne({
      email: email,
    });
    if (user == null) {
      console.log("hello");
      throw new Error("User is not registered");
    }
    // 2.  password check
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("password not matched!!");
    }

    // 3 .  Generate token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    console.log(token);

    // 4. create nextResponse -->> Cookie
    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
      userKey : user
    });

    response.cookies.set("authToken", token, {
      expiresIn : "1d",
      // when we call login api using browser then this below should be true
      httpOnly : true
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
