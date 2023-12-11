import { NextResponse } from "next/server";
import { Work } from "@/models/work";
import { connectDb } from "@/helper/db";

connectDb();

export async function GET(request) {

    const users = await Work.find();

  return NextResponse.json({
      users
  });
}

export async function POST(request) {
  const { workTitle, workDesription, completed } = await request.json();

  try {
    const workData = new Work({
      workTitle,
      workDesription,
      completed,
    });

    await workData.save();

    return NextResponse.json(
      workData,
    );
  } catch (error) {
      return NextResponse.json({
         message : "some error while doing the work"
      })
  }
}
