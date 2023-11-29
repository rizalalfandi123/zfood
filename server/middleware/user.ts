import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const token = getRequestHeader(event, "Authorization");

  if (token) {
    const decodeToken = jwt.verify(token, "shhhhh") as {
      email: string;
      id: string;
    };

    event.context.user = decodeToken;
  }
});
