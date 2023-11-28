import type { Meal } from "~/types";

interface Data {
  ingredient: string;
  measure: string;
}

export default function getIngredientAndMeasureMeal(meal: Meal | null): Array<Data> {
  const ingredients: Array<Data> = [];

  for (let i = 0; i < 20; i++) {
    const newData: Data = { ingredient: "", measure: "" };

    if (meal?.[`strIngredient${i}` as keyof Meal]) {
      newData.ingredient = meal[`strIngredient${i}` as keyof Meal];
    }

    if (meal?.[`strMeasure${i}` as keyof Meal]) {
      newData.measure = meal[`strMeasure${i}` as keyof Meal];
    }

    if (newData.ingredient && newData.measure) ingredients.push(newData)
  }

  return ingredients;
}
