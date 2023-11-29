import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user: { id: string } | null = event.context.user;

  if (!user) {
    return setResponseStatus(event, 401);
  }

  const body = await readBody(event);

  const data: Prisma.FavouriteMealCreateInput = {
    idMeal: body.idMeal,
    strMeal: body.strMeal,
    User: { connect: { id: user.id } },
  };

  try {
    const favouriteMeals = await prisma.favouriteMeal.create({
      data: data,
    });

    return {
      favouriteMeals,
    };
  } catch (error) {
    console.log({ error });
    setResponseStatus(event, 400);
  }
});
