import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient, type Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const form = await readFormData(event);

  try {
    const hashPassword = await bcrypt.hash(
      form.get("password")?.toString() ?? "",
      10
    );

    const data: Prisma.UserCreateInput = {
      email: form.get("email")?.toString() ?? "",
      password: hashPassword,
      name: form.get("name")?.toString(),
    };

    const user = await prisma.user.create({
      data,
      select: {
        email: true,
        id: true,
        password: true,
        name: true,
      },
    });

    const token = jwt.sign(user, "shhhhh");

    return { ...user, token };
  } catch (error) {
    setResponseStatus(event, 400);
  }
});
