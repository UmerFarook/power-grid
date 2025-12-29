import { NextResponse } from "next/server"
import { auth } from "./auth"
import getAuthSession from "./app/lib/actions/getAuthSession"

export const middleware = async (request: Request) =>{
   const {isLoggedIn} = await getAuthSession()
    if(!isLoggedIn){
        return NextResponse.redirect(new URL('/login', request.url))
    }

}

export const config = {
    matcher: '/',
}