import { NextResponse } from "next/server";

const GET = () => {
  return new NextResponse("this is my GET route");
};

const POST = () => {
  return new NextResponse("this is a POST request");
};

const PUT = () => {
  return new NextResponse("this is a PUT request");
};

const PATCH = () => {
  return new NextResponse("this is a PATCH request");
};
export { GET, POST, PUT, PATCH };
