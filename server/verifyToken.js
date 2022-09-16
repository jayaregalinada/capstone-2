import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (request, response, next) => {
  const token = request.cookies.access_token;
  if (!token) {
    console.log(token);
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    } else {
      request.user = user;
      next();
    }
  });
};
