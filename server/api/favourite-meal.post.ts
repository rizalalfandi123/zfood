import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user: { id: string } | null = event.context.user;

  if (!user) {
    return setResponseStatus(event, 401);
  }

  const body = await readBody(event);

  console.log({ body });

  try {
    const favouriteMeal = await prisma.favouriteMeal.create({
      data: {
        idMeal: body.idMeal,
        strMeal: body.strMeal,
        strMealThumb: body.strMealThumb ?? "",
        User: { connect: { id: user.id } },
      },
    });

    return favouriteMeal;
  } catch (error) {
    console.log({ error });
    setResponseStatus(event, 400);
  }
});
