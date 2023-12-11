import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("middleware executed");
  const authToken = request.cookies.get("authToken")?.value;
  // console.log(authToken);
  //   return NextResponse.redirect(new URL('/home', request.url))
  
  //  for this below if line we are making these urls public  
  if (request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users"  ) {
    return;
  }

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup";

  // console.log(request.url);
  // console.log(request.nextUrl);

  if (loggedInUserNotAccessPaths) {
    if (authToken) {
      // console.log(request.nextUrl.pathname);
      // below it is taking request.url as a base and by replacing the /login with the /profile/user
      // and returning it
      return NextResponse.redirect(new URL("/profile/user", request.url));
    }
  }
  // if not loggged in toh pehle login karo please
  else {
    if (!authToken) {

      // here we are going to handle useEffect refreshing error 
      if(request.nextUrl.pathname.startsWith("/api")){
          return NextResponse.json({
              message : "Access Denied",
              success : false
          },{
            status : 401
          })
      }

      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      // if someone changes the token
      // to check the token something like that
    }
  }
}

// See "Matching Paths" below to learn more
// the middleware function will run only if the below paths matches
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    "/api/:path*",
  ],
};
