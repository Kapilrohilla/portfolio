import { NextResponse } from "next/server";

const GET = () => {
  return new NextResponse("this is my first route");
};

export { GET };
