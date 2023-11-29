import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const user: { id: string } | null = event.context.user;

  console.log({user: event.context})

  if (!user) {
    return setResponseStatus(event, 401);
  }

  try {
    const favouriteMeals = await prisma.favouriteMeal.findMany({
      where: { userId: user.id },
    });

    return favouriteMeals;
  } catch (error) {
    setResponseStatus(event, 400);
  }
});
