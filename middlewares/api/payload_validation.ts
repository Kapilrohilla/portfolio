import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ZodError, ZodSchema } from "zod";

export function payload_validation(schema: ZodSchema) {
  return async (request: NextRequest, response: any) => {
    try {
      const payload = await schema.parseAsync(request.body);
      return NextResponse.next();
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        // response.status(400).json({ message: error.message || 'Invalid payload' });
        // return NextResponse.json({error_msg: error.errors,data: null})
        console.log(error);
        return new Response(JSON.stringify({ message: "Payload is valid" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      return NextResponse.next();
    }
  };
}
