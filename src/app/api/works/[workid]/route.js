import { NextResponse } from "next/server";
import { Work } from "@/models/work";


export async function GET (request,{ params }) {
    
    // const { workId } = await params;
    // console.log(workId);
    const {workid} = params;
    console.log(workid);

    const workData = await Work.findById(workid);
    
    console.log(workData);
    return NextResponse.json(workData);
    

}