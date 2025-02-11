//dette er taget fra et tidligere projekt fra uge 6

import { NextResponse } from "next/server"

//brug middleware til og komme ind på sider hvis du er logget ind som en prfile side
export function middleware(request: any) {
    //console.log("request", request.cookies.has("rep_token").value);

    if(!request.cookies.has("repe_token"))
    return NextResponse.redirect(new URL("/login", request.url))

}
export const config = {
    matcher: "/kalender"
}