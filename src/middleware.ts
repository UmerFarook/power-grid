import {NextRequest, NextResponse } from "next/server"
import { auth } from "./auth"
import getAuthSession from "./app/lib/actions/getAuthSession"

export const middleware = async (request: NextRequest) =>{
   const {isLoggedIn} = await getAuthSession();
   const protectedRoutes = ['/users','/dashboard','/form','/'];
   const {pathname} = request.nextUrl

    const isProtected  =protectedRoutes.some(route=> pathname.startsWith(route));
    if(!isLoggedIn && isProtected){
        return NextResponse.redirect(new URL('/login', request.url))
    }
    const response = NextResponse.next();
    response.headers.set('x-current-path', pathname);
    return response;

}

export const config = {
    matcher: ['/users/:path*', '/dashboard/:path*', '/form/:path*','/']
}