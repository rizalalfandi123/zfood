import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const authCookie = getCookie(event, "auth");

  console.log({authCookie})
  if (authCookie && authCookie !== 'null') {
    const parseAuthCookie = JSON.parse(authCookie);

    const decodeToken = jwt.verify(parseAuthCookie.token, "shhhhh") as {
      email: string;
      id: string;
    };


    event.context.user = decodeToken;
  }

});
