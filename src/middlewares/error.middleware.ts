import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/http.exception';
 
function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
  const status = error.status || 500;
  const message = error.message || `Une erreur s'est produite`;
  response
    .status(status)
    .send({
      status,
      message,
    })
}
 
export default errorMiddleware;