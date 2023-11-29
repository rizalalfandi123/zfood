<script setup lang="ts">
import type { Meal } from "~/types";

interface DetailMealResponse {
  meals: Array<Meal>;
}

const route = useRoute();

const { data } = await useLazyFetch(
  `https://www.themealdb.com/api/json/v1/1/lookup.php`,
  {
    query: {
      i: route.params.id,
    },
    transform: (response: DetailMealResponse) => response.meals[0] ?? {},
  }
);
</script>

<template>
  <div class="flex flex-col gap-8 items-center">
    <BackPage to="/" />

    <div class="relative">
      <FavouriteMealStart class="absolute top-2 right-2" :id-meal="data?.idMeal" />
      <img
        :src="data?.strMealThumb"
        :alt="data?.strMeal"
        :class="[
          'w-auto h-80 object-cover rounded-xl',
          'md:h-96',
          'lg:h-[32rem]',
        ]"
      />
    </div>

    <p class="text-center text-3xl font-medium">{{ data?.strMeal }}</p>

    <div class="flex flex-col w-full gap-4 md:flex-row md:flex-1">
      <div class="space-y-2 md:flex-[0.5]">
        <h1 class="text-xl font-medium">Ingredients</h1>

        <table
          class="table-fixed border-collapse border border-slate-500 w-full"
        >
          <thead>
            <tr>
              <td class="border border-slate-500 p-2 w-10 text-center">#</td>
              <td class="border border-slate-500 p-2">Ingredient</td>
              <td class="border border-slate-500 p-2">Measure</td>
            </tr>
          </thead>

          <tbody>
            <tr v-for="ingredient in getIngredientAndMeasureMeal(data)">
              <td class="border border-slate-500 p-2 text-center">
                <input
                  type="checkbox"
                  name="ingredients"
                  :class="[
                    'rounded border-gray-300 text-primary focus:border-primary',
                    'focus:ring-1 focus:ring-primary',
                  ]"
                />
              </td>
              <td class="border border-slate-500 p-2">
                {{ ingredient.ingredient }}
              </td>
              <td class="border border-slate-500 p-2">
                {{ ingredient.measure }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="space-y-2 md:flex-[0.5]">
        <h1 class="text-xl font-medium">Instructions</h1>

        <p
          v-for="sentence in (data?.strInstructions ?? '').split('\n')"
          class="my-1"
        >
          {{ sentence }}
        </p>
      </div>
    </div>
    <DetailMealToggleFavourite :meal="data" class="self-end w-fit" />
  </div>
</template>
