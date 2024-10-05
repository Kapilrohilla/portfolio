type statusCode = 400 | 401 | 403 | 404 | 500;
class CustomError extends Error {
  statusCode: statusCode;
  constructor({
    message,
    statusCode,
  }: {
    message: string;
    statusCode: statusCode;
  }) {
    super(message);
    this.statusCode = statusCode;
  }
}
export default CustomError;
