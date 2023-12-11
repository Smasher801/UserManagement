import { NextResponse } from "next/server"

export const getErrorNextResponse = (messageText,statusCode,successStatus) => {
    
    return NextResponse.json({
        message : messageText,
        success : successStatus,

    },{
        status : statusCode
    })
    

}