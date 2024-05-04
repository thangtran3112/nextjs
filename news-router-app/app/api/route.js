/**
 * route handler is reserved for api calls
 * It must have name of GET, POST, PATCH, DELETE
 * There could be multiple route handlers declared inside the reserved route.js file
 */
export function GET(request) {
  console.log(request);
  // return Response.json();
  //path: locahost:3000/api
  return new Response("Hello");
}

// export function POST(request) {}
