import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user: { id: string } | null = event.context.user;

  if (!user) {
    return setResponseStatus(event, 401);
  }

  const body = await readBody(event);

  try {
    const favouriteMeals = await prisma.favouriteMeal.delete({
      where: {
        idMeal: body.idMeal,
        userId: user.id,
        id: body.id
      },
    });

    return favouriteMeals;
  } catch (error) {
    console.log({ error });
    setResponseStatus(event, 400);
  }
});
