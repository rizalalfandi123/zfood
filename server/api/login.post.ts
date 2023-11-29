import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const form = await readFormData(event);

  try {
    const userExist = await prisma.user.findUnique({
      where: { email: form.get("email")?.toString() ?? "" },
      select: {
        email: true,
        id: true,
        password: true,
        name: true,
      },
    });

    if (!userExist) {
      throw Error("User is not exist");
    }

    const validPassword = await bcrypt.compare(
      form.get("password")?.toString() ?? "",
      userExist.password
    );

    if (!validPassword) {
      throw Error("Password in correct");
    }

    const user = {
      email: userExist.email,
      name: userExist.name,
      id: userExist.id,
    };

    const token = await jwt.sign(user, "shhhhh");

    return { ...user, token };
  } catch (error) {
    console.log({ error });
    setResponseStatus(event, 400);
  }
});
