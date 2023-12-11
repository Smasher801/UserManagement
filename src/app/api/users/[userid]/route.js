import { User } from "../../../../models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  const data = await User.findOne(userId);
  return NextResponse.json(data);
}

export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    const data = await User.deleteOne({
      userId,
    });

    // console.log(params);
    const userData = await User.find();
    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json({
      message: "data not deleted error",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { password } = await request.json();
  // console.log(password);
  // console.log(userId);
  const { userId } = params;
  console.log(userId);

  try {
    const user = await User.findOne(userId);
    user.password = password;
    // console.log(user.password);

    const updatedUser = await user.save();

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({
      message: "failed to update !!",
    });
  }
}
