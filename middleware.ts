import { NextResponse, NextRequest } from "next/server";

const authRoutes = ["/", "/sign-up"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isSessionExist = request.cookies.has("user-session");

  if (!isSessionExist && !authRoutes.includes(pathname))
    return NextResponse.redirect(new URL("/", request.url));

  if (authRoutes.includes(pathname) && isSessionExist)
    return NextResponse.redirect(new URL(`/project`, request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
