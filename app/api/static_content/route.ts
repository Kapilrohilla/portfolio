import { NextResponse } from "next/server";
import static_content_repository from "./repository";
import dto from "./dto";
import { payload_validation } from "@/middlewares/api/payload_validation";
import { applyMiddlewares } from "@/middlewares/api/apply_middleware";

const GET = async () => {
  const [data, _metadata] =
    await static_content_repository.get_static_content();
  return NextResponse.json({
    error_msg: null,
    data: data,
  });
};

const create_controller = () => {
  return new NextResponse("this is a POST request");
};

const PUT = () => {
  return new NextResponse("this is a PUT request");
};

const PATCH = () => {
  return new NextResponse("this is a PATCH request");
};

const POST = applyMiddlewares(
  payload_validation(dto.createSchema),
  create_controller,
  null
);

export { GET, POST, PUT, PATCH };
