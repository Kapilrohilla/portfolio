import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

interface IApiHandler {
  (req?: Request, res?: NextApiResponse): unknown;
}

export function applyMiddlewares(
  beforeMiddleware: any,
  handler: IApiHandler,
  afterMiddleware: any
) {
  return async (req: Request, res: NextApiResponse<unknown>) => {
    // Execute "before" middleware
    await new Promise((resolve, reject) => {
      beforeMiddleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });

    // Execute the handler
    await handler(req, res);

    // Execute "after" middleware if the response hasn't ended
    // if (!res.writableEnded) {
    //     afterMiddleware(req, res);
    // }
  };
}
