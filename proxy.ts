import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
    console.log(request.nextUrl.pathname)
    return NextResponse.next()
}

// config 여야 함
export const config = {
    matcher: ['/movies/:path*']
}
